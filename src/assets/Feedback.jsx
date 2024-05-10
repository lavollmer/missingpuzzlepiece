import React from 'react'

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    event.preventDefault();
    console.log(feedback);
  }

  return (
    <div>
      <h1>Feedback Form</h1>
      <p>Please feel out this feedback form so we can improve our site!</p>
    </div>
  )
}

export default Feedback