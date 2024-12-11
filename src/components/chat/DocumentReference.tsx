import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '../ui/button';

interface DocumentReferenceProps {
  documentName: string;
  onSearch: (document: string) => void;
}

export const DocumentReference: React.FC<DocumentReferenceProps> = ({
  documentName,
  onSearch,
}) => {
  return (
    <span className="inline-flex items-center gap-2">
      {documentName}
      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6"
        onClick={() => onSearch(documentName)}
      >
        <Search className="h-4 w-4" />
      </Button>
    </span>
  );
};