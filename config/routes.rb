Tula::Application.routes.draw do

  # get "home/index"

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  root :to => 'home#index'

  match '/coming-soon' => 'home#coming_soon', :as => :coming_soon
  match '/home' => 'home#index', :as => :home
  match '/about' => 'home#about', :as => :about
  match '/why-tula' => 'home#why', :as => :why
  match '/why-tula/acquired-companies' => 'home#acquisitions', :as => :acquisitions
  match '/why-tula/references' => 'home#references', :as => :references
  match '/investment-prospectus' => 'home#prospectus', :as => :prospectus
  match '/contact' => 'home#contact', :as => :contact
  match '/terms' => 'home#terms', :as => :terms

  namespace :admin do
    resources :acquisitions
  end

  ComfyBlog::Routing.admin
  ComfyBlog::Routing.content
  ComfortableMexicanSofa::Routing.admin(:path => '/cms-admin')
  # Make sure this routeset is defined last
  ComfortableMexicanSofa::Routing.content(:path => '/', :sitemap => false)

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
