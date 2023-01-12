class ApplicationError extends Error {
	status;
	message;
	details;
	constructor(status, message, error) {
		super(message, error);
		this.status = status;
		this.message = message;
		this.details = error?.errors?.length ?? 0 ? error.errors : [error?.message ?? 'application error'];
	}
	static BadRequestError(message, error) {
		return new ApplicationError(400, message || 'Bad request', error);
	}
	static TokenError(message, error) {
		return new ApplicationError(401, message || 'User is not authorized', error);
	}
	static BankDeclineError(message, error) {
		return new ApplicationError(403, message || 'Bank decline transaction', error);
	}
	static UserNotFoundError(message, error) {
		return new ApplicationError(404, message || 'User with email not found', error);
	}
	static NotUniqueEmail(message, error) {
		return new ApplicationError(409, message || 'This email were already exist', error);
	}
	static NotEnoughMoney(message, error) {
		return new ApplicationError(417, message || 'Not enough money', error);
	}
	static RightsError(message, error) {
		return new ApplicationError(423, message || 'Not enough rights', error);
	}
	static ServerError(message, error) {
		return new ApplicationError(500, message || 'Server error', error);
	}
}
module.exports = ApplicationError;
