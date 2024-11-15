import { create } from 'zustand';
import api from '../lib/axios';
import { toast } from 'react-hot-toast';

interface Course {
  _id: string;
  title: string;
  details: string;
  semester: string;
  enrollstatus: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
}

interface CourseState {
  courses: Course[];
  loading: boolean;
  fetchCourses: () => Promise<void>;
  createCourse: (courseData: Partial<Course>) => Promise<void>;
  updateCourse: (id: string, courseData: Partial<Course>) => Promise<void>;
  deleteCourse: (id: string) => Promise<void>;
}

export const useCourseStore = create<CourseState>((set, get) => ({
  courses: [],
  loading: false,

  fetchCourses: async () => {
    set({ loading: true });
    try {
      const response = await api.get('/courses');
      set({ courses: response.data });
    } catch (error) {
      toast.error('Failed to fetch courses');
    } finally {
      set({ loading: false });
    }
  },

  createCourse: async (courseData) => {
    try {
      const response = await api.post('/courses', courseData);
      set({ courses: [...get().courses, response.data] });
      toast.success('Course created successfully');
    } catch (error) {
      toast.error('Failed to create course');
      throw error;
    }
  },

  updateCourse: async (id, courseData) => {
    try {
      const response = await api.put(`/courses/${id}`, courseData);
      set({
        courses: get().courses.map((course) =>
          course._id === id ? response.data : course
        ),
      });
      toast.success('Course updated successfully');
    } catch (error) {
      toast.error('Failed to update course');
      throw error;
    }
  },

  deleteCourse: async (id) => {
    try {
      await api.delete(`/courses/${id}`);
      set({
        courses: get().courses.filter((course) => course._id !== id),
      });
      toast.success('Course deleted successfully');
    } catch (error) {
      toast.error('Failed to delete course');
      throw error;
    }
  },
}));