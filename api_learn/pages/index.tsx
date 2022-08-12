import { useRef } from 'react'

const HomePage = () => {
	const emailInputRef = useRef()
	const feedbackInputRef = useRef()

	const handleSubmit = (event: any) => {
		event.preventDefault() // Disable browser reload
		const enteredEmail = emailInputRef.current.value
		const enteredFeedback = feedbackInputRef.current.value

		const reqBody = { email: enteredEmail, text: enteredFeedback }

		fetch('/api/feedback', {
			method: 'POST',
			body: JSON.stringify(reqBody),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
	}

	return (
		<div>
			<h1>The Home Page</h1>
			<form>
				<div>
					<label htmlFor="email">Your E-mail Address</label>
					<input id="email" type="email" ref={emailInputRef} />
				</div>
				<div>
					<label htmlFor="feedback">Your Feedback</label>
					<textarea id="feedback" rows={5} ref={feedbackInputRef} />
				</div>
				<button onClick={handleSubmit}>Send Feedback</button>
			</form>
		</div>
	)
}

export default HomePage
