class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  before_action :configure_permitted_parameters, if: :devise_controller?

  # def configure_permitted_parameters
  #   devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:username])
  # end


  protected

  def configure_permitted_parameters
    devise_params = %i[username]
    # For additional fields in app/views/devise/registrations/new.html.erb
    devise_parameter_sanitizer.permit(:sign_up, keys: devise_params)

    # For additional in app/views/devise/registrations/edit.html.erb
    devise_parameter_sanitizer.permit(:account_update, keys: devise_params)
  end

end
