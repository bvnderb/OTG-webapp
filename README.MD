The OTG Web App is a feature-rich platform designed to enhance the Of The Gods Old School RuneScape (OSRS) clan’s experience. It integrates seamlessly with the OTG Discord bot to manage clan activities, track in-game currency (God Coins), and facilitate interactive gameplay features like tile races.

----------------------------------------------------------------------------------------------------------------------------------

Table of Contents
	•	Features
	•	Tech Stack
	•	Setup
	•	Usage
	•	Roadmap
	•	Contributing

----------------------------------------------------------------------------------------------------------------------------------

Features

Discord Bot Integration
	•	Synchronize God Coins (GC) and leaderboard updates.
	•	Manage in-game currency directly from the web app.
	•	Notifications for staff regarding shop purchases.

Tile Race
	•	Track progress for multiple teams on a dynamic board.
	•	Visual representation of positions and statuses.
	•	Easy-to-manage updates via the web app.

Shop
	•	Allows members to spend GC on in-game or Discord perks.
	•	Interactive UI for browsing and purchasing items.
	•	Staff notifications for efficient inventory management.

Dice Roll Command
	•	/roll command for a six-sided die within Discord.

----------------------------------------------------------------------------------------------------------------------------------

Tech Stack

Frontend
	•	HTML, CSS, JavaScript
	•	TailwindCSS: For utility-first styling and responsive design.
    •   Angular

Backend
	•	PHP: Primary programming language for backend logic.
	•	Laravel: For building RESTful APIs and handling backend logic.
	•	Discord PHP SDK (optional): For interacting with the Discord API.

Database
	•	MongoDB: For storing GC balances, shop items, and race data.

APIs
	•	Discord API: For bot commands and user management.
	•	Custom APIs: For synchronization between the web app and bot.

----------------------------------------------------------------------------------------------------------------------------------

Setup

Prerequisites

To get started, ensure you have the following installed and configured:
	1.	PHP (v8.1 or later)
Laravel requires PHP 8.1 or higher.
	2.	Composer
PHP dependency manager for installing Laravel and other packages.
	3.	MySQL (or another supported database)
To store God Coins, leaderboard data, shop items, and tile race information.
	4.	Web Server (e.g., Apache or Nginx)
Required for running the Laravel application.
	5.	Discord Bot Token
Obtain this from the Discord Developer Portal with the necessary permissions (e.g., bot, applications.commands).

----------------------------------------------------------------------------------------------------------------------------------

Installation
	1.	Clone the Repository:
    git clone https://github.com/your-repo-name/otg-webapp.git
cd otg-webapp

	2.	Install Dependencies:
Use Composer to install Laravel dependencies:
composer install

	3.	Set Up Environment Variables:
Configure your .env file to match your local setup:
APP_NAME="OTG Web App"
APP_ENV=local
APP_KEY=base64:generate-your-key
APP_DEBUG=true
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password

DISCORD_BOT_TOKEN=your_discord_bot_token

Generate the application key:
php artisan key:generate

	4.	Set Up the Database:
Run migrations to create the necessary tables:
php artisan migrate

	5.	Run the Application:
Start the Laravel development server:
php artisan serve

By default, the application will be accessible at http://localhost:8000.

----------------------------------------------------------------------------------------------------------------------------------

Optional Configuration

Web Server (for Production)
	1.	Configure Apache or Nginx to point to Laravel’s public directory.
	2.	Set proper permissions for the storage and bootstrap/cache directories:
    chmod -R 775 storage bootstrap/cache

Queues and Jobs

Install and configure a queue driver (e.g., Redis) for managing background tasks:
composer require predis/predis

Discord Integration

If you’re using a library like RestCord, install it via Composer:
composer require restcord/restcord

----------------------------------------------------------------------------------------------------------------------------------

Setting Up Laravel for OTG Web App
	1.	Install Laravel:

    composer create-project --prefer-dist laravel/laravel otg-webapp

    2.	Environment Configuration:
Add the following to the .env file:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password

DISCORD_BOT_TOKEN=your_bot_token

	3.	Database Setup:
	•	Use Laravel migrations to define your tables for God Coins (GC), shop items, and tile race data.
	•	Example migration for a god_coins table:

    public function up()
{
    Schema::create('god_coins', function (Blueprint $table) {
        $table->id();
        $table->unsignedBigInteger('user_id');
        $table->integer('balance')->default(0);
        $table->timestamps();
    });
}

4.	Discord API Integration:
	•	Use a library like RestCord for Discord API interactions or write custom HTTP requests using Laravel’s Http client.
	5.	API Routes:
Define API endpoints in the routes/api.php file:
Route::get('/leaderboard', [LeaderboardController::class, 'index']);
Route::post('/shop/purchase', [ShopController::class, 'purchase']);

	6.	Controllers:
Create controllers to handle the business logic:

php artisan make:controller LeaderboardController

----------------------------------------------------------------------------------------------------------------------------------

Deployment
	1.	Web Hosting:
Deploy Laravel on a PHP-supporting platform like Laravel Forge, AWS, or shared hosting providers.
	2.	Queue Management:
Use Laravel queues for background jobs like syncing Discord bot data. Tools like Redis or SQS are compatible.