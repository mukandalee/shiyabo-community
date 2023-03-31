class CategoriesController < ApplicationController
    def index
        categories =Category.all
        render json:categories

    end
    def show 
        category =Category.find(params[:id])
        render json: category
    end
    def create
    end
    def update
    end
    def   destroy
    end
end
