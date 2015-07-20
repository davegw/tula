class User < ActiveRecord::Base
  attr_accessible :email, :name, :password_hash, :password, :password_confirmation, :registered_at, :admin

  validates_confirmation_of :password
  validates_presence_of :email, :name, :password
  validates_uniqueness_of :email

  def encrypt_password(new_password)
    @password = BCrypt::Password.create(new_password)
    self.password_hash = @password
  end

  def check_password?(entered_password)
    self.password == entered_password
  end

  def password
    @password ||= BCrypt::Password.new(self.password_hash)
  end

  def password=(new_password)
    encrypt_password(new_password)
  end

  def authenticate(password)
    check_password?(password)
  end

  def admin?
    !!admin
  end
end
