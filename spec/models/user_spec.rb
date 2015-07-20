require 'rails_helper'

RSpec.describe User, :type => :model do
  describe '.correct_password?' do
    subject do
      user = User.new
      user.encrypt_password(password)
      user.check_password?(entered_password)
    end
    let(:password) { 'password' }

    context 'when the incorrect password is given' do
      let(:entered_password) { 'bad_password' }
      it { is_expected.to be false }
    end

    context 'when the correct password is given' do
      let(:entered_password) { password }
      it { is_expected.to be true }
    end
  end
end
