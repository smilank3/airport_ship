import {Component} from 'react';
import Router from 'next/router';

import cookie from 'js-cookie';
import {redirect} from './redirect.js';

function handleLogin(token, userRole,context,) {
  console.log('auth.handleLogin', token);
  cookie.set('token', token, {expires: 32});


console.log(userRole)
console.log(typeof userRole)


if(userRole==='user'){

  redirect('/dashboard', context);
  return;
}

if(userRole==='admin' || userRole==="manager"){
	redirect('/admin/dashboard',context);
	return;
}

if(userRole==='kiosk clerk'){
	redirect('/kiosk/dashboard',context);
	return;
}


if(userRole==='staff'){
	redirect('/staff/dashboard')
	return;
}


}

function logout() {
 
  cookie.remove('token');
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now());
  redirect('/');
}

export {handleLogin, logout};
