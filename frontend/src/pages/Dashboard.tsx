import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { useCourseStore } from '../store/courseStore';
import CourseCard from '../components/CourseCard';
import CourseForm from '../components/CourseForm';

export default function Dashboard() {
  const { courses, loading, fetchCourses, createCourse, updateCourse } = useCourseStore();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  const handleSubmit = async (data: any) => {
    try {
      if (editingCourse) {
        await updateCourse(editingCourse._id, data);
      } else {
        await createCourse(data);
      }
      setIsFormOpen(false);
      setEditingCourse(null);
    } catch (error) {
      // Error handling is managed by the store
    }
  };

  const handleEdit = (course: any) => {
    setEditingCourse(course);
    setIsFormOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Courses</h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Course
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
              onEdit={() => handleEdit(course)}
            />
          ))}
        </div>
      )}

      {isFormOpen && (
        <CourseForm
          onSubmit={handleSubmit}
          onClose={() => {
            setIsFormOpen(false);
            setEditingCourse(null);
          }}
          initialData={editingCourse}
        />
      )}
    </div>
  );
}