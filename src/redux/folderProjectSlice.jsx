import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SendRequestThunk, serverUrl } from "../Services/requests";
import { notifier } from "./notifSlice";

export const getFolders = createAsyncThunk(
  "folder/getFolders",
  async (_, thunkAPI) => {
    const { id } = thunkAPI.getState().user;
    return await axios
      .get(serverUrl + "/folder/get", { params: { user: id } })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        thunkAPI.dispatch(
          notifier({ message: "Problème rencontré", type: "error" })
        );
        return thunkAPI.rejectWithValue([]);
      });
  }
);

export const getProjects = createAsyncThunk(
  "folder/getProjects",
  async (_, thunkAPI) => {
    const { id } = thunkAPI.getState().user;

    return await axios
      .get(serverUrl + "/project/get", { params: { user: id } })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        thunkAPI.dispatch(
          notifier({ message: "Problème rencontré", type: "error" })
        );
        return thunkAPI.rejectWithValue([]);
      });
  }
);

export const addFolder = createAsyncThunk(
  "folder/addFolder",
  async ({ data, callback }, thunkAPI) => {
    const { id } = thunkAPI.getState().user;
    return await axios
      .post(serverUrl + "/folder/add", { user: id, title: data })
      .then((res) => {
        callback();
        thunkAPI.dispatch(
          notifier({
            message: "Ajoût réussi",
          })
        );
        return res.data;
      })
      .catch((err) => {
        thunkAPI.dispatch(
          notifier({
            message: "Impossible d'ajouter le dossier",
            type: "error",
          })
        );
      });
  }
);
export const addProject = createAsyncThunk(
  "folder/addProject",
  async ({ data, callback }, thunkAPI) => {
    const { id } = thunkAPI.getState().user;
    console.log(data);
    return await axios
      .post(serverUrl + "/project/add", { ...data, user: id })
      .then((res) => {
        callback();
        thunkAPI.dispatch(notifier({ message: "Nouveau projet créé" }));
        const { folders } = thunkAPI.getState().folder;
        if (
          folders.data.filter((f) => f.title === res.data.folder.title)
            .length === 0
        ) {
          thunkAPI.dispatch(addFolderReducer(res.data.folder));
        }
        return res.data.project;
      })
      .catch((err) => {
        thunkAPI.dispatch(
          notifier({
            message: "Impossible d'ajouter le dossier",
            type: "error",
          })
        );
      });
  }
);
const initialState = {
  folders: {
    isLoadingAdding: false,
    isLoading: true,
    data: [],
  },
  projects: {
    isLoadingAdding: false,
    isLoading: true,
    data: [],
  },
};

export const folderSlice = createSlice({
  name: "folder",
  initialState,
  reducers: {
    addFolderReducer: (state, action) => {
      state.folders.data = [...state.folders.data, action.payload];
    },
  },
  extraReducers: {
    //?GetFolders
    [getFolders.pending]: (state) => {
      state.folders.isLoading = true;
    },
    [getFolders.fulfilled]: (state, action) => {
      state.folders.isLoading = false;
      state.folders.data = action.payload;
    },
    [getFolders.rejected]: (state, action) => {
      state.folders.isLoading = false;
      state.folders.data = action.payload;
    },
    //?GetProjects
    [getProjects.pending]: (state) => {
      state.projects.isLoading = true;
    },
    [getProjects.fulfilled]: (state, action) => {
      state.projects.isLoading = false;
      state.projects.data = [...action.payload];
    },
    [getProjects.rejected]: (state, action) => {
      state.projects.isLoading = false;
      state.projects.data = [...action.payload];
    },
    //?AddFolder
    [addFolder.pending]: (state) => {
      state.folders.isLoadingAdding = true;
    },
    [addFolder.fulfilled]: (state, action) => {
      state.folders.isLoadingAdding = false;
      state.folders.data = [...state.folders.data, action.payload];
    },
    [addFolder.rejected]: (state) => {
      state.folders.isLoadingAdding = false;
    },
    //?AddProject
    [addProject.pending]: (state) => {
      state.projects.isLoadingAdding = true;
    },
    [addProject.fulfilled]: (state, action) => {
      state.projects.isLoadingAdding = false;
      console.log(action.payload);
      state.projects.data = [...state.projects.data, action.payload];
    },
    [addProject.rejected]: (state) => {
      state.projects.isLoadingAdding = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFolderReducer } = folderSlice.actions;
export default folderSlice.reducer;
