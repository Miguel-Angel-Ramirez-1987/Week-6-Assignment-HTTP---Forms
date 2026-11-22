// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely). Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.


let saveAndApplyPreferences = function(applyAndStorePreferences) {

    let inputedValueForName = LocalStorage.setItem("name");
    let inputedValueForColor = LocalStorage.setItem("Preferred background color")
    let inputedValueForText = LocalStorage.setItem("Preferred text color")

    .addEventListener("Save and Apply Preferences", () => {
        applyAndStorePreferences(getItem("name"), 
                                    getItem("Preferred background color"), 
                                    getItem("Preferred text color"))
    });
        
        if (perferencesLeftUnchanged) {
            let applyAndStorePreferences = (preferencesUponLoading)
        }
        else (saveAndApplyPreferences = function(applyAndStorePreference)                                                                                     
});


function greet(getItem("name")) {
    Let greet(getItem("name")) = LocalStorage.setItem("name")

}


function returnVisitNewSession(preferencesUponLoading) {
    if (returnVisitNewSession)
        let preferencesUponLoading = saveAndApplyPreferences  
})



