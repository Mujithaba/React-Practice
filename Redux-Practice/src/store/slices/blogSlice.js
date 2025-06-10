import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    title: "",
    description: "",
  },
  blogList: [],
  getCurrentBlogId: null,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    handleInputChange: (state, action) => {
      let cpyFormData = { ...state.formData };
      cpyFormData = {
        ...cpyFormData,
        ...action.payload,
      };
      state.formData = cpyFormData;
    },

    handleAddToDo: (state, action) => {
      state.blogList.push({
        id: nanoid(),
        ...state.formData,
      });
      state.formData = {
        title: "",
        description: "",
      };
    },

    deleteBlogItem: (state, action) => {
      let cpyBlogData = [...state.blogList];
      cpyBlogData = cpyBlogData.filter((item) => item.id !== action.payload.id);
      state.blogList = cpyBlogData;
    },
    setCurrentBlogId: (state, action) => {
      state.getCurrentBlogId = action.payload.blogId;
    },
    editCurrentBlog: (state, action) => {
      let cpyBlogData = [...state.blogList];
      const findIndex = cpyBlogData.findIndex(
        (item) => item.id === state.getCurrentBlogId
      );
      cpyBlogData[findIndex]={
        ...cpyBlogData[findIndex], 
        ...state.formData
      }
      console.log(cpyBlogData,"cpyBlogData");
      
      state.blogList =cpyBlogData
    },
  },
});

export const {
  handleInputChange,
  handleAddToDo,
  deleteBlogItem,
  setCurrentBlogId,
  editCurrentBlog,
} = blogSlice.actions;
export default blogSlice.reducer;
