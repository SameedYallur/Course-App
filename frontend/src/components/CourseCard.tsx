import React from 'react';
import { Book, Calendar, Edit2, Trash2 } from 'lucide-react';
import { useCourseStore } from '../store/courseStore';
import { useAuthStore } from '../store/authStore';

interface CourseCardProps {
  course: {
    _id: string;
    title: string;
    details: string;
    semester: string;
    enrollstatus: string;
    owner: string;
  };
  onEdit: () => void;
}

export default function CourseCard({ course, onEdit }: CourseCardProps) {
  const { deleteCourse } = useCourseStore();
  const { user } = useAuthStore();
  const isOwner = user?._id === course.owner;

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      await deleteCourse(course._id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {course.title}
            </h3>
            <p className="text-gray-600 mb-4">{course.details}</p>
            
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{course.semester}</span>
              </div>
              <div className="flex items-center">
                <Book className="h-4 w-4 mr-1" />
                <span className={`px-2 py-1 rounded-full text-xs ${
                  course.enrollstatus === 'Open' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {course.enrollstatus}
                </span>
              </div>
            </div>
          </div>

          {isOwner && (
            <div className="flex space-x-2">
              <button
                onClick={onEdit}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
              >
                <Edit2 className="h-5 w-5" />
              </button>
              <button
                onClick={handleDelete}
                className="p-2 text-red-600 hover:bg-red-50 rounded-full"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}