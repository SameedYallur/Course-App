import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Clock, Shield } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80"
            alt="Students studying"
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            CourseHub
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Streamline your educational journey with our comprehensive course
            management system. Create, manage, and organize your courses with ease.
          </p>
          <div className="mt-10 flex space-x-4">
            <Link
              to="/signup"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to manage your courses
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">
                  Course Management
                </h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Create and manage your courses with an intuitive interface.
                  Organize content, track progress, and more.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">
                  User-Friendly
                </h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Simple and intuitive interface designed for both educators and
                  students.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900">
                  Secure Access
                </h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Protected with modern security features to keep your data safe
                  and private.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}