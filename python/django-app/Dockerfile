# Base image for Python and Django
FROM python:3.10-slim

# Set the working directory in the container
WORKDIR /app

# Install the Python dependencies
RUN pip install --no-cache-dir "Django>=4.0,<5.0"

# Copy the application code
COPY . .

# Expose port 3200 for the Django app
EXPOSE 3200

# Run Django's development server without reloader
CMD ["python", "manage.py", "runserver", "0.0.0.0:3200", "--noreload"]