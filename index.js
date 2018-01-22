'use strict';
module.exports = opts => {
	opts = opts || {};

	const env = opts.env || process.env;
	const platform = opts.platform || process.platform;

	// Short-circuit if PATH exists, which is the most common
	if (Object.prototype.hasOwnProperty.call(env, 'PATH')) {
		return 'PATH';
	}

	// Short-circuit if PATH exists, which is the second most common
	// e.g.: Windows or Windows bash which runs Ubuntu
	if (Object.prototype.hasOwnProperty.call(env, 'Path')) {
		return 'Path';
	}

	// Look for PATH in a case insensitive manner
	const found = Object.keys(env).find(x => x.toUpperCase() === 'PATH');

	if (found) {
		return found;
	}

	// If none were found, have a good fallback based on the OS
	return platform === 'win32' ? 'Path' : 'PATH';
};
