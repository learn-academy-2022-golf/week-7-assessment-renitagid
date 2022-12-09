# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is a controller that we generated to hold the logic of our blog posts app. It will hold the methods for the app.
class BlogPostsController < ApplicationController
  def index
    # ---2)This is an instance variable. It stores data that can only be accessed inside the class. specifically, it is within the method index which is used to return all of the existing instances for a given model.
    @posts = BlogPost.all
  end

  # ---3) This is a method named show, which is one of the 7 RESTful routes. Show is used to display a single instance of a model, specifically the one being queried in the parameters. It sets up an instance variable to hold the data for that instance.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This is a method named new which is another REStful route. New is used to display an HTML form for the user to enter data which can be used to add to the database as a new instance of the model.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) This is an instance variable which is being assigned to a new instance of the model blog post. It takes a parameter of blog_post_params, which keeps it dynamic to whatever is being submitted within the form.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This instance variable is used to display a form for a user to update some data that has previously been stored in the database
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) this is a method that is built into rails which updates the attributes passed in the parameters and then saves. note it seems to be recommended to use update! instead of update, because although this one did include an if/else statement, if you forget to include that, it will silently fail. Whereas update! will give an error if it fails.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) redirect_to is a method in ruby that redirects the browser to the specified target, this one is redirecting to a path which would have been set up within the routes, using the option :as
      redirect_to blog_posts_path
    end
  end

  # ---9) private is a method which allows you to define methods that can only be used internally, and cannot be called from outside the class.
  private
  def blog_post_params
    # ---10) require and permit are two methods provided in rails parameters. require checks to see if a specific parameter is present. If not, it will throw an error. here it is requiring the symbol :blog_post. Then, permit is used to return only the data which was specified in the parameters. So in this example, given blog_post, it will only permit the user to look at title and content. When used inside the private block, these parameters can only be accessed from within the class.
    params.require(:blog_post).permit(:title, :content)
  end
end
