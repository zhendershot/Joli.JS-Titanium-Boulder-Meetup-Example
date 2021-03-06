//FirstView Component Constructor
function HomeView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var recipe_button = Ti.UI.createButton({
		color:'#000000',
		title:L('browse'),
		height:'auto',
		width:'auto',
		top:20
	});
	self.add(recipe_button);
	
	//Add behavior for UI
	recipe_button.addEventListener('click', function(e) {
		// Grab ALL the recipes with no conditions
		var recipes = Globals.models.recipe.all();
		
		var Window = require('ui/RecipeWindow');
		Globals.navController.open(new Window(recipes));
	});
	
	var type_button = Ti.UI.createButton({
		color:'#000000',
		title:L('types'),
		height:'auto',
		width:'auto',
		top:80
	});
	self.add(type_button);
	
	//Add behavior for UI
	type_button.addEventListener('click', function(e) {
		var Window = require('ui/TypeWindow');
		Globals.navController.open(new Window());
	});
	
	var category_button = Ti.UI.createButton({
		color:'#000000',
		title:L('categories'),
		height:'auto',
		width:'auto',
		top:140
	});
	self.add(category_button);
	
	//Add behavior for UI
	category_button.addEventListener('click', function(e) {
		var Window = require('ui/CategoryWindow');
		Globals.navController.open(new Window());
	});
	
	var search_button = Ti.UI.createButton({
        color:'#000000',
        title:L('search'),
        height:'auto',
        width:'auto',
        top:200
    });
    self.add(search_button);
    
    //Add behavior for UI
    search_button.addEventListener('click', function(e) {
        var Window = require('ui/SearchWindow');
        Globals.navController.open(new Window());
    });
    
    var new_button = Ti.UI.createButton({
        color:'#000000',
        title:L('create_recipe'),
        height:'auto',
        width:'auto',
        top:260
    });
    self.add(new_button);
    
    new_button.addEventListener('click', function(e) {
        var newRecipe = Globals.models.recipe.newRecord({
            name:           'New Recipe',
            servings:       1,
            ingredients:    '1 Carrot<br/>2 Pears',
            directions:     'Cut Carrot<br/>Eat Pears',
            note:           'This is a great summer recipe',
            credits:        'I came up with this off the top of my head!'
        });

        newRecipe.save();
    });
	
	return self;
}

module.exports = HomeView;
