import { createSlice } from "@reduxjs/toolkit";

export const gameSlice = createSlice({
    name: 'game',
    initialState: {
        totalScore: 0,
        userAnswer: null,
        computerAnswer: null,
        userImage: null,
        computerImage: null,
        rulesView: false,
        closeButton: false,
    },
    reducers: {
        addUserAnswer: (state, action) => {
            state.userAnswer = action.payload;
        },
        addComputerAnswer: (state, action) => {
            state.computerAnswer = action.payload;
        },
        addUserImage: (state, action) => {
            state.userImage = action.payload;
        },
        addComputerImage: (state, action) => {
            state.computerImage = action.payload;
        },
        increaseTotalScore: (state) => {
            state.totalScore +=1;
        },
        decreaseTotalScore: (state) => {
            state.totalScore -=1;
        },
        closeButton: (state, action) => {
            state.closeButton = action.payload;
        },
        rulesView: (state, action) => {
            state.rulesView = action.payload;
        },
    },
})

export const { addComputerAnswer, addUserAnswer, increaseTotalScore, decreaseTotalScore, addUserImage, addComputerImage, closeButton } = gameSlice.actions

export const getUserAnswer = (state) => state.game.userAnswer;
export const getComputerAnswer = (state) => state.game.computerAnswer;
export const getTotalScore = (state) => state.game.totalScore;
export const getComputerImage = (state) => state.game.computerImage;
export const getUserImage = (state) => state.game.userImage;
export const getCloseButton = (state) => state.game.closeButton;
export const getRulesView = (state) => state.game.rulesView;

export default gameSlice.reducer