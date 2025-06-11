# REMWaste App

This is my updated version of the remwaste app at the skip size choice.

## Functional Choices

I choosed a simple list of skip sizes to replace the original card list. The idea was to get rid of the shopping card approach that I judged not relevant for this feature.
Actualy, I thought about a searchable select list (a combobox) for the job to choose a skip size but I think that having the price directly with the size is a usefull information for the user so the simple list was the best choice.

With that, the old skip size selection interaction was a bad UX flow. Making the card selectable could have suggested the users that they can select more than 1 skip size, whitch is not the case. So there was a need to provide the user another way to let them know that they can choose only 1 size and which one they choosed (the bottom bar was not so bad of an idea but is not asa clear as I what I want to give). So I decided that clicking a skip size card would only give infromations about the skip (like the image, the hire period,...) and the main action (the "continue" button) can only be done for the selected skip. This way the user see only the most important informations first (the skip size and the price), get some details when they make the pre-selection (the image, the hire period) and their final choice is absolutely certain to be the one they are currently seeing.

The image was removed since it is not realy informative for the user (the image does not give any help for the user to imagine the result), but is still acessible when the user select the skip. Also, an alert was visible when the skip is not allowed on the road since this gives a real consequence for the user (the continue button is disabled because they cannot order a skip that is not allowed for their  street).

Unfortunately, not enough effort was able to be put on color scheme selection.

### Possible Improvement

* A button to show only allowed skip or show all*
* In large screen (while the skip size list is vertical), make the page not scrollable but only the list
* Add the search feature to help the user find more easily*
* Add filter feature* (like for size or price)

*NB*: * => Features that could be done by the api

## Technical Choice

Since this repository is only a for showcasing, I choosed the make the code the simplest possible :

* shadcn and tailwindcss for development speed
* custom useQuery hook (no need for an extra dependency)
* simple code structure
