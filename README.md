## Billboard Top 100-Project 3
We chose to study the data provided in the Billboard Top 100 Charts from years 1941-2020 to compare the “Top 100 Songs of Each Decade” according to Billboard Magazine by Gender.

### History
Billboard Magazine was founded in 1864 by William H. Donaldson and James H. Hennegan. The first issue of billboard magazine was launched in 1894. As time progressed, a chart called “First Hits Chart”  was created in July of 1940. The billboard  top 100 as we know it today showed up in 1958 and eventually became digital in 1995. ![image](https://user-images.githubusercontent.com/90288887/149623774-4b8e2b92-3594-45b6-bb23-50afcb2e499b.png)



#### Starting Data Webscrape
We scraped data from the two websites http://billboardtop100of.com/ and https://www.billboard.com/charts/year-end focusing on the history of the "Billboard Top 100" chart starting in 1941 and ending in 2020. We focused on 5 focus groups ‘Female’ , ‘Male’, ‘Male Group’, ‘Female Group’, ‘Mixed Group’. There were some years that artists did alot of collaboration and those years fell into the 'Mixed Group category'. In the 70s we noticted that 'Male Groups' dominated the charts. We also noticed that 'Male Artists' dominated the charts throughout the years. In 2010, we noticed a rise in the 'Mixed Group' category this was due to features where male and female artists collaborted on music together. Throughout the 90s we saw a peak in 'Male Group' but female group had a small rise but neither dominated like the solo artists or mixed group category. In 1995, we saw the rise in 'Female artists' in which we hope to see more female artist top the charts in the future years. Adele "Easy on me" is currrently dominating the charts in the No.1 spot prior to that Mariah Carey dominated the charts during christmas time with "ALL I WANT".

##### CREATING THE DATA VISUALIZATION
We scraped the data from the website and cleaned the data using Pandas in juypter notebook.


![70s top 100 scrape](https://user-images.githubusercontent.com/90288887/149627553-98fb2738-bb5b-475b-a97e-15dd88ac2b88.jpg)



![90s](https://user-images.githubusercontent.com/90288887/149627561-edf827d1-8dd6-4ea0-a946-cef2b2d9d41b.jpg)






![Billboard_scrape](https://user-images.githubusercontent.com/90288887/149627624-c37446bc-828f-4643-b0f6-e11127a48149.jpg)




Once the data was cleaned we began working on the HTML code to create the website.

![HTML code](https://user-images.githubusercontent.com/90288887/149629288-88eebd7b-75e1-4e36-9cc2-3b84405407ed.jpg)



![HTML](https://user-images.githubusercontent.com/90288887/149629294-427f7fc8-cc14-44d6-bdcf-bac54521c05d.jpg)



Once the website was up and running we began plottting our charts to tell our visual story.
<img width="506" alt="image (5)" src="https://user-images.githubusercontent.com/90288887/149628590-08a62a48-caff-4377-baf4-192ffb329955.png">


![image](https://user-images.githubusercontent.com/90288887/149625243-1d58e32f-bf16-4752-b917-3f3d38118891.png)
![image (1)](https://user-images.githubusercontent.com/90288887/149625246-1296bf61-41a1-43be-b83e-b57c8c735463.png)


![Bar plot](https://user-images.githubusercontent.com/90288887/149627843-cbcf0e5d-4886-4317-8457-093c4d164fcc.jpg)


Once our charts were completed we began working on completing our website.





<img width="267" alt="image (6)" src="https://user-images.githubusercontent.com/90288887/149628628-9f0d5138-e843-4982-92a7-4f1b7ab6d803.png">




Some Problems


We have our data in a database, but we had a lot of trouble getting it to call correctly, so in order to build the graphs, we entered the data manually. We have not gotten it to run fully with the database. The other big stumbling block was the scrape button. The code works in jupiter notebook sometimes, for some particular things, but it would not run through the scrape.py and the flask. We got a forbidden message one of the times that we scraped, so we are unsure if it was us or the website security.


#### Conclusion
This data could be used for multiple reasons. As a fan of music, it was interesting to see the years that female artists did well in the charts as opposed to male artists who usually dominate the field. The charts could be used by music labels or independent artists seeing what listeners love the most to create genre of music around that will sell. In music, the data algorisms run the listener behavior. Overall, we saw the change from the early 70s into the 2000s. Male artists dominated in the 2000s and male groups dominated in the 60s. We see a rise in females in the mid 90s around 1995 females dominated the charts. Currently, Adele is on top of the charts with “Easy on me” that was just released last month. 

[Final-Report.docx](https://github.com/KElijahS/Minefield-Project3/files/7875440/Final-Report.docx)

