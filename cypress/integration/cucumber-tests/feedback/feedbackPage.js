import { base_feedback_url} from '../../../fixtures/config';
const NAME_INPUT = '#name'
const EMAIL_INPUT = '#email'
const SUBJECT_INPUT = '#subject'
const COMMENT_INPUT = '#comment'
const SUBMIT_BUTTON = 'input[name="submit"]'

class FeedbackPage {
	static visit() {
		cy.visit(base_feedback_url)
	}

	static fillFeedbackForm() {
		cy.get(NAME_INPUT).type('Name')
		cy.get(EMAIL_INPUT).type('Name@gmail.com')
		cy.get(SUBJECT_INPUT).type('Subject')
		cy.get(COMMENT_INPUT).type('Just a comment')
	}

	static submitFeedbackForm() {
		cy.get(SUBMIT_BUTTON).click()
	}
}

export default FeedbackPage
