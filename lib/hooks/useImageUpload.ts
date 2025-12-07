import { useState, useRef, ChangeEvent } from 'react';

interface UseImageUploadReturn {
  preview: string;
  file: File | null;
  isUploading: boolean;
  error: string | null;
  handleClick: () => void;
  handleFileSelect: (e: ChangeEvent<HTMLInputElement>) => void;
  handleGooglePhotos: () => void;
  showSourceDialog: boolean;
  setShowSourceDialog: (show: boolean) => void;
  inputProps: {
    ref: React.RefObject<HTMLInputElement | null>;
    type: 'file';
    accept: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className: string;
  };
}

interface UseImageUploadOptions {
  defaultImage?: string;
  maxSizeMB?: number;
  allowedFormats?: string[];
  onUploadSuccess?: (url: string) => void;
  onUploadError?: (error: Error) => void;
}

const DEFAULT_OPTIONS: Required<Omit<UseImageUploadOptions, 'defaultImage' | 'onUploadSuccess' | 'onUploadError'>> = {
  maxSizeMB: 5,
  allowedFormats: ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'],
};

export default function useImageUpload(
  defaultImage: string = '',
  options: UseImageUploadOptions = {}
): UseImageUploadReturn {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  
  const [preview, setPreview] = useState<string>(defaultImage);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSourceDialog, setShowSourceDialog] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  /**
   * Validates the selected file against size and format constraints
   */
  const validateFile = (selectedFile: File): boolean => {
    setError(null);

    // Check file format
    if (!mergedOptions.allowedFormats.includes(selectedFile.type)) {
      setError(`Invalid format. Allowed: ${mergedOptions.allowedFormats.join(', ')}`);
      return false;
    }

    // Check file size
    const fileSizeMB = selectedFile.size / (1024 * 1024);
    if (fileSizeMB > mergedOptions.maxSizeMB) {
      setError(`File too large. Max size: ${mergedOptions.maxSizeMB}MB`);
      return false;
    }

    return true;
  };

  /**
   * Handles file selection from local computer
   */
  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    if (!validateFile(selectedFile)) return;

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
      setFile(selectedFile);
      options.onUploadSuccess?.(reader.result as string);
    };
    reader.onerror = () => {
      const err = new Error('Failed to read file');
      setError(err.message);
      options.onUploadError?.(err);
    };
    reader.readAsDataURL(selectedFile);

    // Reset input value to allow re-uploading same file
    e.target.value = '';
  };

  /**
   * Opens source selection dialog (Local vs Google Photos)
   */
  const handleClick = () => {
    setShowSourceDialog(true);
  };

  /**
   * Triggers local file input
   */
  const handleLocalUpload = () => {
    setShowSourceDialog(false);
    fileInputRef.current?.click();
  };

  /**
   * Handles Google Photos integration
   * TODO: Implement Google Photos Picker API
   */
  const handleGooglePhotos = async () => {
    setShowSourceDialog(false);
    setIsUploading(true);
    
    try {
      // Placeholder for Google Photos integration
      // Will use Google Picker API: https://developers.google.com/picker
      console.log('Google Photos integration - To be implemented');
      alert('Google Photos integration coming soon!');
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Google Photos upload failed');
      setError(error.message);
      options.onUploadError?.(error);
    } finally {
      setIsUploading(false);
    }
  };

  return {
    preview,
    file,
    isUploading,
    error,
    handleClick,
    handleFileSelect,
    handleGooglePhotos,
    showSourceDialog,
    setShowSourceDialog,
    inputProps: {
      ref: fileInputRef,
      type: 'file' as const,
      accept: mergedOptions.allowedFormats.join(','),
      onChange: handleFileSelect,
      className: 'hidden',
    },
  };
}
