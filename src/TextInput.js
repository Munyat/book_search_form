import React from 'react';

// This component uses a technique known as
// “prop delegation”. We'll learn more about it
// in Module 4!
function TextInput({ id, label, ...delegated }) {
  let generatedId = React.useId();
  let appliedId = id || generatedId;

  return (
    <>
      <label htmlFor={appliedId}>
        {label}
      </label>
      <input
        id={appliedId}
        {...delegated}
      />
    </>
  );
}

export default TextInput;