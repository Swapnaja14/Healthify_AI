Installation Process : 
Install Python and Django
Ensure Python (at least version 3.x) is installed on your system.
python --version
If not, download and install it from python.org.

Install Django these following modules:
pip install django
pip install python-dotenv
pip install requests
pip install django-mathfilters

write cd Health in your terminal to navigate the main project

Set Up the Database
Run migrations to set up the database schema:
python manage.py migrate

Start the Development Server
Run the following command to start the server:
python manage.py runserver
Open the given URL (usually http://127.0.0.1:8000/) in your web browser to view the application.

