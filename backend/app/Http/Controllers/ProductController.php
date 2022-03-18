<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    function addProduct(Request $request)
    {
        $product = new Product;
        $product->name = $request->input('name');
        $product->price = $request->price;
        $product->description = $request->description;
        $product->file_path = $request->file('file')->store('products', 'public');
        $product->save();
        return $product;
    }

    function list()
    {
        return Product::all();
    }

    function delete($id)
    {
        $delete = Product::where('id', $id)->delete();
        if ($delete) {
            return ["result" => "Product has been delete"];
        } else {
            return ["result" => "Operation false"];
        }
    }
    function getProduct($id)
    {
        return Product::find($id);
    }
    function search($key)
    {
        return Product::where('name', 'like', "%$key%")->get();
    }
}
