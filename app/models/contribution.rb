class Contribution < ApplicationRecord
    belongs_to :user
    belongs_to :admin
end
