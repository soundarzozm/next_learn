import fs from 'fs'
import path from 'path'

export const getFeedbackPath = () => {
	return path.join(process.cwd(), 'data', 'feedback.json')
}

export const readFeedback = () => {
	const filePath = getFeedbackPath()
	const fileData = fs.readFileSync(filePath)

	const data = JSON.parse(fileData)

	return data
}

function handler(req: any, res: any) {
	if (req.method === 'POST') {
		try {
			const email = req.body.email
			const feedbackText = req.body.text

			const newFeedback = {
				id: new Date().toISOString(),
				email: email,
				text: feedbackText,
			}

			const data = readFeedback()

			data.push(newFeedback)
			fs.writeFileSync(getFeedbackPath(), JSON.stringify(data))

			res.status(201).json({
				message: 'Success!',
				feedback: newFeedback,
			})
		} catch (error) {
			console.log(error)
		}
	} else {
		const data = readFeedback()
		res.status(200).json({
			feedback: data,
		})
	}
}

export default handler
