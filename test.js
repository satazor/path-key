import test from 'ava';
import m from './';

test(t => {
	t.is(m().toUpperCase(), 'PATH');
	t.is(m({env: {PATH: ''}}), 'PATH');
	t.is(m({env: {Path: ''}}), 'Path');
	t.is(m({env: {PATh: ''}}), 'PATh');
	t.is(m({env: {Path: '', PATH: ''}}), 'PATH');
	t.is(m({env: {}, platform: 'linux'}), 'PATH');
	t.is(m({env: {}, platform: 'darwin'}), 'PATH');
	t.is(m({env: {}, platform: 'win32'}), 'Path');
});
