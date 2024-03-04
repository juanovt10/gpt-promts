"use client";

import { Suspense } from 'react';

import EditPromptContent from '@components/EditPromptContent';

function EditPromtContentFallback() {
  return <div>Loading...</div>
}

const UpdatePrompt = () => {
  return (
    <Suspense fallback={EditPromtContentFallback}>
      <EditPromptContent />
    </Suspense>
  )
}

export default UpdatePrompt;

