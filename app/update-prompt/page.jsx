'use client';

import { Suspense } from 'react';

import EditPromptContent from '@components/EditPromptContent';

const EditPrompt = () => {
  return (
  <Suspense fallback={<div>Loading...</div>}>
    <EditPromptContent />
  </Suspense>
  )
}

export default EditPrompt;

