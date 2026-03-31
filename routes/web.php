<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/login', function(){
    return Inertia::render('auth/Login');
});

Route::get('/register', function(){
    return Inertia::render('auth/Register');
});

Route::get('/announcements', function(){
    return Inertia::render('guest/Announcements');
});

Route::get('/amenities', function(){
    return Inertia::render('guest/Amenities');
});

Route::get('/board-and-governance', function(){
    return Inertia::render('guest/BoardAndGovernance');
});

Route::get('/contact', function(){
    return Inertia::render('guest/Contact');
});

Route::get('/dashboard', function(){
    return Inertia::render('Dashboard');
});

Route::redirect('/home', '/dashboard');

