# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|

|email|string|null: false, unique: true|
|password|string|null: false|
|nickname|string|null: false|
### Association
- has_many :messages
- has_many :groups, through: :users_groups  
- has_many :users_groups


## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group
## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

add_index :groups, :name, unique: true

### Association
- has_many :users, through: :users_groups
- has_many :messages
- has_many :users_groups


## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key:true| 
|group|id|integer|null: false, foreign_key:true|
### Association
- belongs_to :user
- belongs_to :group


* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
