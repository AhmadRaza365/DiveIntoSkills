import React, { useRef } from 'react';


const Subscribe = () => {
  const inputEl = useRef(null);
 

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
        alert(error);

      return;
    }

    inputEl.current.value = '';
    
  };

  return (
    <form onSubmit={subscribe}>
        <input ref={inputEl} type="email" placeholder="Enter your email" />
        <button type="submit" >
            Subscribe
        </button>
    </form>
  );
};

export default Subscribe;