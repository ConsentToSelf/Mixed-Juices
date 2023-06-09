# Mixed-Juices

# Instructions

You are an avid bird watcher that keeps track of how many birds have visited your garden. Usually, you use a tally in a notebook to count the birds but you want to better work with your data. You already digitalized the bird counts per day for the past weeks that you kept in the notebook.

Now you want to determine the total number of birds that you counted, calculate the bird count for a specific week and correct a counting mistake.

Note
To practice, use a for loop to solve each of the tasks below.

1. Determine the total number of birds that you counted so far
Let us start analyzing the data by getting a high-level view. Find out how many birds you counted in total since you started your logs.

Implement a function totalBirdCount that accepts an array that contains the bird count per day. It should return the total number of birds that you counted.
````
timeToMixJuice('Tropical Island');
// => 3

timeToMixJuice('Berries & Lime');
// => 2.5
````
2. Replenish the lime wedge supply
A lot of Li Mei's creations include lime wedges, either as an ingredient or as part of the decoration. So when she starts her shift in the morning she needs to make sure the bin of lime wedges is full for the day ahead.

Implement the function limesToCut which takes the number of lime wedges Li Mei needs to cut and an array representing the supply of whole limes she has at hand. She can get 6 wedges from a 'small' lime, 8 wedges from a 'medium' lime and 10 from a 'large' lime. She always cuts the limes in the order in which they appear in the list, starting with the first item. She keeps going until she reached the number of wedges that she needs or until she runs out of limes.

Li Mei would like to know in advance how many limes she needs to cut. The limesToCut function should return the number of limes to cut.
````
limesToCut(25, ['small', 'small', 'large', 'medium', 'small']);
// => 4
````
3. Finish up the shift
Li Mei always works until 3pm. Then her employee Dmitry takes over. There are often drinks that have been ordered but are not prepared yet when Li Mei's shift ends. Dmitry will then prepare the remaining juices.

To make the hand-over easier, implement a function remainingOrders which takes the number of minutes left in Li Mei's shift and an array of juices that have been ordered but not prepared yet. The function should return the orders that Li Mei cannot start preparing before the end of her workday.

The time left in the shift will always be greater than 0. The array of juices to prepare will never be empty. Furthermore, the orders are prepared in the order in which they appear in the array. If Li Mei starts to mix a certain juice, she will always finish it even if she has to work a bit longer. If there are no remaining orders left that Dmitry needs to take care of, an empty array should be returned.
````
remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']);
// => ['Green Garden']
````


