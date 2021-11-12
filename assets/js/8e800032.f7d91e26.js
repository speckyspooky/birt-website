(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(135)),o={id:"scripting",title:"Scripting",sidebar_label:"Scripting"},l={unversionedId:"integrating/scripting",id:"integrating/scripting",isDocsHomePage:!1,title:"Scripting",description:"Background",source:"@site/docs/integrating/scripting.md",slug:"/integrating/scripting",permalink:"/birt-website/docs/integrating/scripting",editUrl:"https://github.com/eclipse/birt-website/tree/main/docs/integrating/scripting.md",version:"current",sidebar_label:"Scripting"},s=[{value:"Background",id:"background",children:[]},{value:"Events",id:"events",children:[]},{value:"Generation phase.",id:"generation-phase",children:[]},{value:"Presentation phase.",id:"presentation-phase",children:[]},{value:"reportContext and <em>this</em>",id:"reportcontext-and-this",children:[]},{value:"Report Level Events",id:"report-level-events",children:[]},{value:"Report Element Events",id:"report-element-events",children:[]},{value:"Report Element Event Examples",id:"report-element-event-examples",children:[]},{value:"Report Data Source(Set) Events",id:"report-data-sourceset-events",children:[]},{value:"Writting Events in Java",id:"writting-events-in-java",children:[]},{value:"Debugging a Report",id:"debugging-a-report",children:[]},{value:"Additional Resources",id:"additional-resources",children:[]}],c={toc:s};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"background"},"Background"),Object(i.b)("p",null,'BIRT provides a rich scripting model based on the Mozilla Rhino engine. The processes that the Report engine uses to create reports can be classified in two phases, Report Generation and Presentation. The Generation phase consumes the report design and creates an intermediate file, called the report document. The Presentation phase uses the report document to render to HTML or PDF. The report creation pipeline can execute these phases as one task or in two task. If executed in one phase the report document is created in memory. This is the default behavior of the designer when "Preview as HTML" is chosen. If executed in two phases the report document is created and stored to disk. This is the default behavior of the designer when "Preview in Web Viewer" is selected.'),Object(i.b)("p",null,"Events within each phase can be overridden, by creating event handlers, to alter report content. BIRT allows these event handlers to be written in either JavaScript or Java. If you code your event handler in both Java and JavaScript the JavaScript version will be executed by default."),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:n(192).default})),Object(i.b)("h3",{id:"events"},"Events"),Object(i.b)("p",null,"Script events are defined for three objects, Report Object, Report Elements, and Data Source(Sets). The phase the engine is processing determines what events and which properties of the object are available for customization. The diagram below illustrates what Script Events are available in a particular phase, for a given object."),Object(i.b)("p",null,"Pictured below is a representation of the event firing order for a simple report containing a table and a data element. The event order is shown for separate generation and presentation phases."),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:n(193).default})),Object(i.b)("h3",{id:"generation-phase"},"Generation phase."),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:n(194).default})),Object(i.b)("h3",{id:"presentation-phase"},"Presentation phase."),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:n(195).default})),Object(i.b)("h3",{id:"reportcontext-and-this"},"reportContext and ",Object(i.b)("em",{parentName:"h3"},"this")),Object(i.b)("p",null,"Selecting the Palette view while in the Script editor will display functions and variables that are available in the given event for the selected report element. For example the screenshot below is for the ",Object(i.b)("strong",{parentName:"p"},"onCreate")," event handler of a data element."),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:n(196).default})),Object(i.b)("p",null,"Using the ",Object(i.b)("em",{parentName:"p"},"this")," operator list available methods and properties for the element in the given event and is used to view or alter styles, values etc. See examples illustrated later."),Object(i.b)("p",null,"Use of reportContext allows accessing or modifying of report wide properties. Using reportContext a developer can set global variables to share between elements. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                onInitialize of the report\n                reportContext.setPersistentGlobalVariable("testglobal", "test global string");\n                \n')),Object(i.b)("p",null,"use of the Persistent version allows the variable to be persisted across generation and presentation. Also note that the variable is an Object type allowing greater flexibility."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"                onPrepare of a label element in a table\n                this.text = reportContext.getPersistentGlobalVariable('testglobal');\n                \n")),Object(i.b)("p",null,"This global variable can be assigned to a data element using the binding editor. Simply reference the variable in the expression builder for the desired column. For example, if a column exist in the binding editor that retrieves a string from a data base, you could append your global variable to the value by entering the following expression:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                dataSetRow["MyString"] + "-" + reportContext\n                     .getPersistentGlobalVariable(\'testglobal\');\n                \n')),Object(i.b)("p",null,"The reportContext also allows access to session variables."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"                //attributeBean is a Birt Viewer supplied session variable\n                myAttributeBean = reportContext.getHttpServletRequest()\n                     .getAttribute('attributeBean');\n                reportDoc = myAttributeBean.getReportDocumentName( );\n                this.text = reportDoc;\n                \n")),Object(i.b)("p",null,"The reportContext allows reading and modifying the context for use within scripts. For example:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                onInitialize of the report\n                appContext = reportContext.getAppContext();\n                importPackage(Packages.java.util)\n                myArrList = new ArrayList();\n                myArrList.add("one");\n                myArrList.add("two");\n                appContext.put("AppContextTest", myArrList);\n                \n')),Object(i.b)("p",null,"This loads the current application context and modifies it for later use. Within a label element's onPrepare event handler, it could then be used as follows:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                appContext = reportContext.getAppContext();\n                myObject = appContext.get("AppContextTest");\n                this.text = myObject.size();\n                \n')),Object(i.b)("p",null,"The above example could have also been implemented using:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                reportContext.setPersistentGlobalVariable("testglobal", myArrList);\n                \n')),Object(i.b)("p",null,"The reportContext can also be used to retrieve the current locale and messages stored within a resource file."),Object(i.b)("h3",{id:"report-level-events"},"Report Level Events"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"afterFactory - The afterFactory event executes upon terminating the generation phase.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"afterRender - The afterRender event executes at the end of the presentation phase.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"beforeFactory - The beforeFactory event executes prior to beginning the generation phase.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"beforeRender - The beforeRender event executes just prior to beginning the presentation phase.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"initialize - A script that executes before the report begins to execute in both the generation or presentation phase."))),Object(i.b)("p",null,"Within the initialize event you can define global functions, variables and objects. For example to create a global JavaScript function:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                function gTest(v){\n                      return "Global Function:" + v;\n                }\n                //this line is only required if using the function within Chart Scripts\n                reportContext.setPersistentGlobalVariable("gTest", gTest);\n                \n')),Object(i.b)("p",null,"To use this function just call"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                gTest("MyTest");\n                or\n                gTest = reportContext.getPersistentGlobalVariable("gTest");\n                val = gTest("Use Persistent");\n                \n')),Object(i.b)("p",null,"To access the reportContext object within a chart script use the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"                context.getExternalContext().getScriptable()\n                \n")),Object(i.b)("p",null,"To illustrate, the chart title could be altered with the following chart script:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                function beforeGeneration( chart, context ){\n                    importPackage(Packages.org.eclipse.birt.chart.model.type.impl);\n                    newChartTitle = context.getExternalContext().getScriptable()\n                        .getPersistentGlobalVariable("testglobal");\n                    chart.getTitle().getLabel().getCaption().setValue(newChartTitle);\n                }\n                \n')),Object(i.b)("p",null,'In the beforeFactory event there are several methods that allow accessing elements within the report. The elements usually require a name. For example, using a Data Set named "orders", I want to display the query that was executed in a dynamic text element named "TestHeader". This can be achieved by entering the following script in beforeFactory'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                query = this.getDataSet("orders").queryText\n                this.getDynamicText("TestHeader").valueExpr = "query;";\n                \n')),Object(i.b)("h3",{id:"report-element-events"},"Report Element Events"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"onPrepare: This event gets called in the report generation phase. It is called once for each report element in the design. This is an opportunity to change the element design. The changes will affect all instances of the element, i.e. all table rows.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"onCreate: Also a generation phase event. Here, the instance of the element can be modified and accessed. For example, an instance of a table row might be changed (setting every 10th rows background to red for example).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"onRender: Presentation phase event. Similar to onCreate in that the instance is modifiable. Access to data is not available."))),Object(i.b)("p",null,"Here is a very simple scripting example for a detail row in a table:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                onPrepare:\n                this.getStyle().backgroundColor = "red";//This would change all row instances\n    \n                onCreate:\n                if (this.getRowData().getExpressionValue(3) > 100)\n                this.getStyle().backgroundColor="red";//This will only change the row instance\n                \n                For a table with 100 rows, onPrepare will be called once (to change the \n                design), and onCreate and onRender will be called 100 times (to change the \n                instance).\n                \n')),Object(i.b)("h3",{id:"report-element-event-examples"},"Report Element Event Examples"),Object(i.b)("h4",{id:"setting-label-text-dynamic-text-and-data-element-values"},"Setting Label, Text, Dynamic Text and Data Element values"),Object(i.b)("p",null,"Setting the value of a label element can be achieved by writting an event handler for the onPrepare or onCreate event and entering similar code presented below:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                this.text = "My New Label"\n                \n')),Object(i.b)("p",null,"Obviously this is a simple example and the value could be set simply by double clicking on the text element. Using the JavaScript editor allows complex logic to be implemented.\nSetting the value of a text element can be done in the onPrepare event by entering the following code in your event handler:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                this.content= = "My New Text"\n                \n')),Object(i.b)("p",null,"When setting the value of a dynamic text element you will need to specify a value expression. This value expression gets evaluated when generating the report. Creating an event handler for the onPrepare event allows changing the value expression."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"                this.valueExpr = \"row['CITY']\";\n                \n")),Object(i.b)("p",null,"It is important to note that valueExpr expects a string. This is similar to what you would enter in the Expression Builder, but wrapped in quotes. So if you want to enter a string or partial string use single quotes."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"                this.valueExpr = this.valueExpr = \"'my row count: ' + (row[0] + 1)\";\n                \n")),Object(i.b)("p",null,"Setting values for data elements is accomplished by using the binding editor. If you wish to change this value in script you can set the value in the binding editor to a JavaScript variable. This variable can then be changed within script. If you use this method remember that order of execution is important. Changing the variable after the element is created will not change the data element value."),Object(i.b)("h4",{id:"setting-toc-entries-in-script"},"Setting TOC Entries in Script"),Object(i.b)("p",null,"The TOC expression is similar to value expressions in that it expects a string."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"                this.tocExpression=this.tocExpression = \"'tocbyrownumber: ' + row[0]\";\n                \n")),Object(i.b)("h4",{id:"using-row-data-within-scripts"},"Using row data within scripts"),Object(i.b)("p",null,"Row data is available in the onCreate event. This allows you to examine the values that will be used on the current row of a table or list."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"                this.getRowData().getExpressionValue(int) \n                \n")),Object(i.b)("p",null,"should give you the value of the expression in the i:th column in your table."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                this.getRowData().getExpressionValue("some_expression") \n                \n')),Object(i.b)("p",null,"should give you the value of the provided expression for the row. This expression has to be defined on the table."),Object(i.b)("p",null,"Examples:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                Table(2 columns):\n                row["product"]    |    row["price"]\n                \n                Result:\n                product1    |    $20\n                product2    |    $30\n                \n                Script on row.onCreate:\n                if (this.getRowData().getExpressionValue(1) == "product1")\n                    this.getStyle().backgroundColor = "red";\n                    \n                if (this.getRowData().getExpressionValue("row[price]") == "$30")\n                    this.getStyle().backgroundColor = "blue";\n                \n')),Object(i.b)("p",null,"Result of script:"),Object(i.b)("p",null,"First row should be red, second row should be blue. Remember that the the expressions are the ones defined on the table using the binding editor, not the dataset. Using the row","[name]"," syntax corresponds to the name field defined in the binding editor."),Object(i.b)("h4",{id:"modifying-hyperlinks"},"Modifying Hyperlinks"),Object(i.b)("p",null,"The hyperlink for a data element can be modified in the onPrepare by using code similar to:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"                this.getAction().URI = \"'http://www.google.com'\";\n                \n")),Object(i.b)("p",null,"Notice the single quotes within the double quotes."),Object(i.b)("h4",{id:"using-getstyle"},"Using getStyle"),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:n(197).default})),Object(i.b)("p",null,"Using the getStyle method allows customizing properties for a given element."),Object(i.b)("p",null,"for example to bold a particular element:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                this.getStyle().fontWeight = "bold";\n                \n')),Object(i.b)("h4",{id:"using-getparent"},"Using getParent"),Object(i.b)("p",null,"The getParent method allows access to elements that contain the element you are currently working with. If you were scripting an onPrepare event handler for a table row, getParent would return a handle to the table. If you were scripting an onPrepare event handler for a data element, to access the table you will need to call getParent several times."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"                this.getParent().getParent().getParent()\n                \n                This corresponds to \n                dataElement->Cell->Row->Table\n                \n")),Object(i.b)("p",null,"So to change the color of the table background from a data element would look like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                this.getParent().getParent().getParent().getStyle().backgroundColor = "Silver";\n                \n')),Object(i.b)("h4",{id:"using-getvalue"},"Using getValue"),Object(i.b)("p",null,"Often it is required to alter the visual appearance of an element based on its value. This can be usually done within the mapping or highlights tab. When more complex logic is required it can be accomplished by using the getValue method within the onCreate of a row or data element."),Object(i.b)("p",null,"On the data element"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                if( this.getValue() > 30 ){\n                    this.getStyle().fontFamily = "Arial"\n                    this.getStyle().backgroundColor = "Yellow"\n                }\n                \n                on the row\n                if (this.getRowData().getExpressionValue("row[QtyOrdered]") > 30){\n                    this.getStyle().fontFamily = "Arial"\n                    this.getStyle().backgroundColor = "Yellow"\n                }\n                \n')),Object(i.b)("h4",{id:"using-named-expressions"},"Using Named Expressions"),Object(i.b)("p",null,"A named expression is an expression that is created on an element and given a name. The expression definition can be edited in onPrepare, and the value of the evaluated expression can be accessed in onCreate and onRender. These are often useful when scripting in Java and use of a function like Total is needed. For example a named expression my be defined as totalCreditValue and it's value set to Total.sum(row",'["CREDITLIMIT"]',"). The named expression would then be available to other elements in JavaScript as well as Java.\nSo if you define a Named Expression on a table named 'RWC' and set it's value to row","[0]",", you would access it on the row like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                rc = this.parent.getNamedExpressionValue("RWC");\n                \n')),Object(i.b)("h3",{id:"report-data-sourceset-events"},"Report Data Source(Set) Events"),Object(i.b)("p",null,"The events available with Data Source and Data Sets will depend on the type of source that is being used.\nData Source Events\nThe common events for the Data Source are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"afterClose - A script that executes after BIRT closes the data source connection.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"afterOpen - A script that executes after BIRT opens the data source connection for data access.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"beforeClose - A script that executes before BIRT closes the data source connection.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"beforeOpen - A script that executes before BIRT opens the data source connection for data access."))),Object(i.b)("p",null,"If you are building a Scripted Data Source, two additional events are available:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open - A script that executes to open the Data Source.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Close - A script that executes to close the Data Source."))),Object(i.b)("p",null,"With the property binding editor now available, setting properties using script is not always necessary. An example of setting the password for the Data Source is as follows:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                Data Source beforeOpen \n                currentPassword = this.getExtensionProperty("odaPassword");\n                DataSourceClass = new Packages.myExternalSecurity();\n                this.setExtensionProperty("odaPassword", DataSourceClass.getPassword());\n                \n')),Object(i.b)("h4",{id:"data-set-events"},"Data Set Events"),Object(i.b)("p",null,"The common events for the Data Sets are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"afterClose - A script that executes after BIRT closes the data set.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"afterOpen - A script that executes after BIRT opens the data set.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"beforeClose - A script that executes before BIRT closes the data set.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"beforeOpen - A script that executes before BIRT opens the data set.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"onFetch - A script that executes after fetching each row and before applying filters or calculating computed fields"))),Object(i.b)("p",null,"If you are building a Scripted Data Source, four additional events are available:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"describe - A script that is used to create the columns of a Scripted Data Source dynamically.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"open - A script that executes upon opening the data set.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"close - A script that executes after the fetch event returns false.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"fetch - A script that executes to retrieve the data."))),Object(i.b)("p",null,"With the property binding editor now available, setting Data Set properties can usually be done in the properites editor.\nAn example of changing the query with JavaScript is presented below."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                beforeOpen of the Data Set\n                this.queryText = "SELECT * FROM Customers where CustomerID \n                     IN (" + params["customersInClause"] +")";\n                \n')),Object(i.b)("p",null,"When implementing a Scripted Data Set, use the open event to initialize variables, classes etc. Use the Fetch event to load your row data. Remember to return false when your data set is finished. Use close to close any external objects."),Object(i.b)("p",null,"To illustrate a Scripted Data Set, assume that you have an external Java Object that returns an ArrayList. To use this with the scripted data set do the following."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                open event of the Data Set\n                importPackage(Packages.test.my.ds)\n                myDataSet = new DS();\n                myArrayList = myDataSet.getList();\n                myIter = myArrayList.iterator();\n                \n                fetch event of the Data Set\n                if( !myIter.hasNext() ){\n                    return false;\n                }\n                //myOnlyColumn must be manually defined or defined in the describe event\n                row["myOnlyColumn"] = iter.next();\n                return true;\n                \n')),Object(i.b)("h3",{id:"writting-events-in-java"},"Writting Events in Java"),Object(i.b)("p",null,"BIRT event handlers can be written in Java. This section will describe setting up a Birt Events Java project, assigning the event handlers to elements and finally debugging the report."),Object(i.b)("p",null,'When writing Java event handlers remember that a new event handler instance will be created for each invocation. The implication of this is that you can not use class data memeber to pass information between methods. For example, if you want to pass information from "onPrepare()" to "onCreate()", you need to use the reportContext to hold the shared information.'),Object(i.b)("h4",{id:"setting-up-the-java-project"},"Setting up the Java Project"),Object(i.b)("p",null,"Within Eclipse, open your workspace that contains the reports that will use the Java event handlers. Create a new Java project and add scriptapi.jar from the Report Engine download."),Object(i.b)("h4",{id:"birt-pojo-runtime-note"},"Birt POJO Runtime Note:"),Object(i.b)("p",null,"If you are using BIRT 3.7 or later See ",Object(i.b)("a",{parentName:"p",href:"http://wiki.eclipse.org/Birt_3.7_Migration_Guide"},"BIRT 3.7 Migration Guide"),".\nAdd org.eclipse.birt.runtime_version.jar to the project instead of scriptapi.jar."),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:n(198).default})),Object(i.b)("p",null,"The scriptapi.jar file includes the event adapters that are needed to implement event handlers."),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:n(199).default})),Object(i.b)("p",null,"Create a new class, specifying TableEventAdapter as the super class."),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:n(200).default})),Object(i.b)("p",null,"Enter the following code for the class."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                package my.test.events;\n                \n                import org.eclipse.birt.report.engine.api.script.eventadapter.TableEventAdapter;\n                import org.eclipse.birt.report.engine.api.script.element.ITable;\n                import org.eclipse.birt.report.engine.api.script.IReportContext;\n                \n                public class TableEH extends TableEventAdapter {\n                \n                     /* table onPrepare event */\n                     public void onPrepare( ITable table, IReportContext reportContext ){\n                            try {\n                                table.setNamedExpression( "total_limit_avg",\n                                     "Total.ave(row[\\"CREDITLIMIT\\"])" );\n                            } catch ( Exception e ) {\n                                e.printStackTrace( );\n                            }\n                     }\n                }\n                \n')),Object(i.b)("p",null,"This code will add a named expression on a table. The value of the named expression is set to Total.ave(row",'["CREDITLIMIT"]',"). In order for this to work there must be a column on the table with a value of row",'["CREDITLIMIT"]',"."),Object(i.b)("p",null,"Repeat the process above for the class RowEH which extends RowEventAdapter and enter the following code."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'                package my.test.events;\n                \n                import org.eclipse.birt.report.engine.api.script.eventadapter.RowEventAdapter;\n                import org.eclipse.birt.report.engine.api.script.IReportContext;\n                import org.eclipse.birt.report.engine.api.script.instance.IRowInstance;\n                import org.eclipse.birt.report.engine.api.script.IRowData;\n                \n                public class RowEH extends RowEventAdapter {\n                    public void onCreate(IRowInstance row, IReportContext context) {\n                        IRowData data = row.getRowData();\n                        double avgCreditLimit = ((Double) row.getParent()\n                             .getNamedExpressionValue("total_limit_avg")).doubleValue();\n                        try {\n                            if (((Double) data.getExpressionValue("row[\\"CREDITLIMIT\\"]"))\n                                 .doubleValue() > avgCreditLimit ) {\n                                row.getStyle( ).setFontWeight( "bolder" );\n                                row.getStyle( ).setFontSize( "larger" );\n                                row.getStyle( ).setColor( "olive" );\n                            }\n                        } catch (Exception e) {\n                            e.printStackTrace();\n                        }\n                    }\n                }\n                \n')),Object(i.b)("p",null,'This event handler is executed on every row and looks for a column named "CREDITLIMIT". If this credit limit is above the average for all entries in the table, the font weight and size are changed and the color is changed to olive.'),Object(i.b)("h4",{id:"adding-the-event-handler-to-the-report"},"Adding the event handler to the Report"),Object(i.b)("p",null,"Now that the Java classes are built we can create a simple report and apply the event handler."),Object(i.b)("p",null,'Build a listing report using the sample database "Classic Models". Enter the following query.'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"                select CLASSICMODELS.CUSTOMERS.CUSTOMERNUMBER,\n                CLASSICMODELS.CUSTOMERS.CUSTOMERNAME,\n                CLASSICMODELS.CUSTOMERS.CREDITLIMIT\n                from CLASSICMODELS.CUSTOMERS\n                \n")),Object(i.b)("p",null,"Drag the data set to the report view and a table should be created automatically. Select the newly created table and enter my.test.events.TableEH in the Event Handler entry on the Properties tab."),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:n(201).default})),Object(i.b)("p",null,"Repeat the process for the row event handler, by selecting the row and entering my.test.events.RowEH in the Event Handler entry on the Properties tab."),Object(i.b)("p",null,"Selecting Preview should result in the following output."),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:n(202).default})),Object(i.b)("h3",{id:"debugging-a-report"},"Debugging a Report"),Object(i.b)("h4",{id:"debugging-java-event-handlers"},"Debugging Java Event Handlers"),Object(i.b)("p",null,"Switch to the Java Perspective and select the Java class that implements the event handler. Add breakpoints as usual and select the run->debug menu. Select BIRT Report under Configurations and click the new button. Check Java under debug type. Select the Classpath tab add the project that impements the event handler using the Add Projects button. Click on debug. The breakpoints in your code will halt report generation. You can now use the standard Eclipse Java Debugger features to diagnose your code."),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:n(203).default})),Object(i.b)("h4",{id:"debugging-javascript-event-handlers"},"Debugging JavaScript Event Handlers"),Object(i.b)("p",null,"If you are only using JavaScript event handlers the JavaScript debugger can be used to debug your report. Click Window->Open Perspective->Other and choose the debug Perspective. Once the debug Perspective is open select Run->Debug Configurations. You can create a new BIRT Report debug launch configuration that will use the currently opened report. In addition you specify which Report Engine Task to run while debugging. These include the Run, RunAndRender, and the RenderTask. You can also set the debugger to do a Run and then a Render Task. These options allow you to recreate the deployed environment. For example when using the frameset servlet mapping in the example Web Viewer, the engine performs a Run Task to generate the report document and then performs a Render Task on the report document. When debugging a report you can specify the Run+Render option to reproduce this behavior in the debugger. The debugger also includes breakpoints, expressions, and variables and supports stepping through either Java or JavaScript event handlers."),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:n(204).default})),Object(i.b)("h4",{id:"deploying-java-event-handlers"},"Deploying Java Event Handlers"),Object(i.b)("p",null,"To deploy the Java Event Handlers you can place the jar containing the event handler in the SCRIPTLIB directory of the web application. The SCRIPTLIB directory is defined in the web.xml of the Viewer application. By default this directory is BIRTViewer/scriptlib. To change this directory set the BIRT_VIEWER_SCRIPTLIB_DIR entry in the web.xml."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"                <context-param>\n                    <param-name>BIRT_VIEWER_SCRIPTLIB_DIR</param-name>\n                    <param-value></param-value>\n                </context-param>\n                \n")),Object(i.b)("h4",{id:"birt-pojo-viewer-note"},"BIRT POJO Viewer Note:"),Object(i.b)("p",null,"If you are installing BIRT 3.7 or higher, the event handler jar can be placed in the WebViewer's classpath (eg WEB-INF/lib)."),Object(i.b)("p",null,"If you are testing the event handler in the designer add the Java project that contains the event handler to the workspace which contains your BIRT report project. Use the Window-Preferences-Report Design-Classpath to configure the BIRT Project Classpath so it has access to the Java Project. Additionally you can select the report, click the properties tab, select the resources property and add the jar. When using this method import the jar to the BIRT Project workspace before adding the resource."),Object(i.b)("h3",{id:"additional-resources"},"Additional Resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.youtube.com/results?search_query=BIRT"},"YouTube")," ")))}p.isMDXComponent=!0},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,h=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(h,l(l({ref:t},c),{},{components:n})):r.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},192:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/overview-6f612482655c5568c26a05d1e22f7588.jpg"},193:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/events-9fe9fc822708efd359decf32d8c6ba34.jpg"},194:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/eventgen-b246e6cc87e75308d9464ac55ab3a293.jpg"},195:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/eventpres-eaa4253031f066137cd8b14305b9017f.jpg"},196:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/palette-0ae18265dfd60bb0ecc6419463bd9280.jpg"},197:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/getStyle-1f2e5f88db7e871474de74e67b309b13.jpg"},198:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/buildpath-59686d15ca391fb6a1b763717c670b1f.jpg"},199:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/eventadapters-935fac22eb642781438eb13872bd746c.jpg"},200:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tableadapter-9130013a61e94f8a58fcec5d4646ba53.jpg"},201:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tableeh-8d571efe40a3968fc430c4fc63642b33.jpg"},202:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/scriptoutput-06645423bc98b946cff51bfb70a9cfec.jpg"},203:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/debugjava-549d4d1d2b879fca006eee671345451f.png"},204:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/debugjs-62a446d8b791cbf57a6e94010875b190.png"}}]);