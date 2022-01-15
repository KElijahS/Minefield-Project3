console.log("data file")
year_array = []

var year_dropdown = d3.select("#selYear");

d3.csv("billboard_combined.csv").then((data) => {
    // console.log("data")
    // console.log(data)

    data.forEach((row) => {
        if (year_array.indexOf(row.Year) == -1) {
            year_array.push(row.Year)
        }
    })

    // console.log("year_array")
    // console.log(year_array)

    year_dropdown.append("option")
        .text("Select Year")
        .property("value", "");

    year_array.sort()

    year_array.forEach((year) => {
        year_dropdown.append("option")
            .text(year)
            .property("value", year);
    });

})

var tbody = d3.select("tbody");

// function that updates the dashboard
function optionChanged(selected_year) {
    console.log("selected_year");
    console.log(selected_year);

    male_count = 0
    female_count = 0
    female_group_count = 0
    male_group_count = 0
    mixed_group_count = 0

    d3.csv("billboard_combined.csv").then((data) => {
        year_results = data.filter(row => row.Year == selected_year);
        console.log("year_results");
        console.log(year_results);

        for (var i = 0; i < year_results.length; i++) {
            if (year_results[i]["Gender"] == "Male") {
                male_count = male_count + 1
            }
            else if (year_results[i]["Gender"] == "Female") {
                female_count = female_count + 1
            }
            else if (year_results[i]["Gender"] == "Female Group") {
                female_group_count = female_group_count + 1
            }
            else if (year_results[i]["Gender"] == "Male Group") {
                male_group_count = male_group_count + 1
            }
                else {
                mixed_group_count = mixed_group_count + 1
            }
        }

        var bar_chart = [{
            x: ["Male", "Female", "Female Group","Male Group","Mixed Group"],
            y: [male_count, female_count, female_group_count, male_group_count,mixed_group_count],
            type: "bar",
            orientation: "v",

        }];

        var layout = {
            title: selected_year + " Hot Songs ",
            margin: { t: 30, l: 150 }

        }

        Plotly.newPlot("bar", bar_chart, layout);

        tbody.html("");

        const tbl_header = tbody.append("tr");
        let header = tbl_header.append("th");
        header.text("Rank");
        header = tbl_header.append("th");
        header.text("Artist");
        header = tbl_header.append("th");
        header.text("Song");

        for (var i = 0; i < year_results.length; i++) {
            const tbl_data = tbody.append("tr");
            let cell = tbl_data.append("td");
            cell.text(year_results[i]["Rank"]);
            cell = tbl_data.append("td");
            cell.text(year_results[i]["Artist"]);
            cell = tbl_data.append("td");
            cell.text(year_results[i]["Song"]);
        }
    });
}

