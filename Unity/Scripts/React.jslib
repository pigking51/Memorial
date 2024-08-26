mergeInto(LibraryManager.library, {
    LikeScoreSave: function (score) {
        localStorage.setItem('likeScore', score);
        
        console.log("Like score saved: " + score);
        
        if (typeof window.dispatchReactUnityEvent === 'function') {
            window.dispatchReactUnityEvent("LikeScores", score);
        }
    },
    DelilveryJson: function (json){
    window.dispatchReactUnityEvent("ShowJson",UTF8ToString(json));},
});