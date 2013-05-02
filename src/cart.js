var MyCart = MyCart || {}

MyCart.Cart = function(){
	var self = this;

	self.items = [];

	self.addItem = function(item){
		self.items.push(item);
		self.itemWasAdded(item.sku);
	};

	self.itemCount = function(){
		return self.items.length;
	}

	self.itemWasAdded = function(){
	}

	self.removeItem = function(item)	{
		self.items.remove(item);
	};
}
