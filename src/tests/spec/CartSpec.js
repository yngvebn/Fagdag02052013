describe("Cart", function(){
	var myCart;

	beforeEach(function(){
		myCart = new MyCart.Cart();
	});

	it("exists", function(){
		expect(myCart).toBeDefined();
	});

	describe("adding 1 item", function(){
		it("should have addItem function", function(){
			expect(myCart.addItem).toBeDefined();

		});

		it("should increment itemCount to 1", function(){
			myCart.addItem({ 'sku': '123'});
			expect(myCart.itemCount()).toEqual(1);
			
		});

		it("should trigger itemWasAdded with correct sku", function(){
			spyOn(myCart, 'itemWasAdded');
			myCart.addItem({'sku': 'abc'});
			expect(myCart.itemWasAdded).toHaveBeenCalledWith('abc');
			expect(myCart.items).toContain({ 'sku': 'abc'});
		});

	});

	describe("removing 1 item", function(){

	
	});

});
