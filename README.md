Installation Process
Install Python and Django
Ensure Python (at least version 3.x) is installed on your system.
python --version
If not, download and install it from python.org.

Install Django using pip:
pip install django

Create and Activate a Virtual Environment
A virtual environment helps isolate dependencies for your project:
python -m venv .venv
Activate the virtual environment:
Windows:
.venv\Scripts\activate
Linux/Mac:
source .venv/bin/activate

Install the required modules from the repository

Set Up the Database
Run migrations to set up the database schema:
python manage.py migrate

Start the Development Server
Run the following command to start the server:
python manage.py runserver
Open the given URL (usually http://127.0.0.1:8000/) in your web browser to view the application.

