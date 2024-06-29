import React, { useRef } from 'react';

function SSNInput() {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const inputElement = e.target as HTMLInputElement;
    if (e.key === 'Backspace' && !inputElement.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div>
      <label>Enter your SSN:</label>
      <div style={{ display: 'flex' }}>
        {Array.from({ length: 9 }).map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            ref={(el) => el && (inputRefs.current[index] = el)}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            style={{ width: '30px', margin: '0 5px', textAlign: 'center' }}
          />
        ))}
      </div>
    </div>
  );
}

export default SSNInput;
