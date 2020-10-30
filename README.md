# Equinor Timer
This app can be used to set up multiple timers that run in parallel or timers trigger when other timers finish.

Examples:
- When making a dinner you would like to start making the different dishes at different times, and sometime a dish can't be started until another is finished.
- Could also be used when holding a presentation to time the different parts of the presentation.

Design we are going towards:
![alt 'UI Sketches'](documents/sketches/sketch_second_iteration)

# Way of Working

## The Pillars

![alt 'The Pillars'](documents/wow_pillars.PNG)

## The Process

![alt 'The Process'](documents/wow_process.PNG)


# Run project using Docker
```
docker build -t timer .
docker run -p 8000:8000 --rm --name timer timer
```

# Run project without Docker
Assumes you have python and node installed. 
