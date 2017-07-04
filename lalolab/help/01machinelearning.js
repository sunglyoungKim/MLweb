// Machine Learning 
 
HELPcontent["<strong>Classifier</strong>"] = ["MachineLearning", "Classifiers","C = new Classifier(algo)\nC = new Classifier(algo, params)\nC.train(X, Y)\ntrain(C, X, Y)\nC.update(X, Y)\nlabels = C.predict(X)\nrecRate = C.test(Xt,yt)\nrecRate = C.cv(X,y, nFolds)\nstats = C.tune(X, Y)\nC.info()","Create a new classifier of a given type (algorithm) with given parameters (params). Any classifier can be trained (with C.train), used to make predictions (C.predict), tested (with C.test), cross-validated (with C.cv) or tuned on a particular data set (C.tune). Some classifiers can also be updated online with additional data (with C.update). <br> X is a __matrix or __vector representing a data set labeled by the __vector Y. The labels can be any numbers.<br><i>algo</i> can be KNN, LDA, QDA, NaiveBayes, LogReg, Perceptron, MLP, SVM, MSVM or DecisionTree (see the corresponding help topics below).<br><i>params</i> is an object of key/value pairs depending on the algorithm. Use C.info() to see the list of default parameters and available functions for a given algorithm.<br> The function C.tune() tries to automatically find the optimal parameters with respect to a cross-validation estimate with C.tune(X,Y) or a validation set with C.tune(X,Y,Xvalid,Yvalid). <br><br>Binary algorithms such as Perceptron or SVM use the one-vs-all decomposition method to deal with multi-class data sets, unless the <i>onevsone</i> parameter is set to true.", , "classification.html"];

HELPcontent["KNN"] = ["MachineLearning", "K-nearest neighbors","knn = new Classifier(KNN, K)\nknn.train(X, Y)\nknn.update(X, Y)\nknn.tune(X, Y)\nknn.predict( x )","Create a new K-nearest neighbors classifier with K neighbors and train it with knn.train(X,Y) on a data set X labeled with Y. If not provided, K defaults to 3.  After an initial training with train(X,Y), the classifier can be updated online with new data by update(Xnew, Ynew). <br>The function C.tune(X,Y) automatically sets K in [1,15] to the best value on the basis of a leave-one-out estimate with a fast implementation requiring about the same time as a simple test on the training data. C.tune(X,Y,Xvalid,Yvalid) works similarly but with a validation error estimated on (Xvalid,Yvalid).", ["X1 = 5 + randn(10,2)\nX2 = -3 + randn(10,2)\nX3 = 0.5*randn(8,2)\nX = [X1;X2;X3]\nY = zeros(28)\nY[0:10] = 1\nY[10:20] = 2\nY[20:28] = 3\nknn = new Classifier(KNN)\nknn.train(X,Y)\nplot(X1,\".b\", \"Points of class 1\", X2, \".g\", \"Points of class 1\", X3, \".r\", \"Points of class 3\")\nx = -10+20*rand(2000,2)\ncolorplot(x, knn.predict(x), \"KNN predictions\")\nknn.info()","// Handwritten digit recognition\n// with automatic tuning of K\ndata = loadURL(\"examples/usps.train\")\nX = data[:,0:256]\nY = data[:,256]\ndata = loadURL(\"examples/usps.test\")\nXt = data[:,0:256]\nYt = data[:,256]\nknn = new Classifier(KNN)\nstats = knn.tune(X, Y)\nrecRate = knn.test(Xt, Yt)"], "knn.html"];

HELPcontent["LDA"] = ["MachineLearning", "Linear discriminant analysis","c = new Classifier(LDA)\nc.train(X, Y)\nc.predict( x )","Create a new linear discriminant and train it on a data set X labeled with Y.", "X1 = 5 + randn(10,2)\nX2 = -3 + randn(10,2)\nX = [X1;X2]\nY = zeros(20)\nY[0:10] = 1\nY[10:20] = 2\nc = new Classifier(LDA)\nc.train(X,Y)\nxh=-10:10\nplot(X1,\"b.\",\"Points from class 1\",X2,\"r.\",\"Points from class 2\",xh,-(c.b+c.w[0]*xh)./c.w[1],\"_k\",\"separating hyperplane\")\nc.info()", "lda.html"];

HELPcontent["QDA"] = ["MachineLearning", "Quadratic discriminant analysis","c = new Classifier(QDA)\nc.train(X, Y)\nc.predict( x )","Create a new quadratic discriminant and train it on a data set X labeled with Y.", ["X1 = 5 + 2 * randn(60,2)\nX2 = -1 + 0.5*randn(40,2)\nX = [X1;X2]\nY = zeros(100)\nY[0:60] = 1\nY[60:100] = 2\nc = new Classifier(QDA)\nc.train(X,Y)\nXt = 10*rand(200,2) - 5\nYt = c.predict(Xt)\ncolorplot(X,Y,\"Training data\")\ncolorplot(Xt,Yt,\"Output of the QDA classifier\")","X1 = 5 + 2 * randn(60,2)\nX2 = -1 + 0.5*randn(40,2)\nX3 = ones(50) * [4,-3]' + randn(50,2)\nX = [X1;X2;X3]\nY = zeros(150)\nY[0:60] = 1\nY[60:100] = 2\nY[100:150] = 3\nc = new Classifier(QDA)\nc.train(X,Y)\nXt = 10*rand(200,2) - 5\nYt = c.predict(Xt)\ncolorplot(X,Y,\"Training data\")\ncolorplot(Xt,Yt,\"Output of the QDA classifier\")"], "lda.html#qda"];

HELPcontent["NaiveBayes"] = ["MachineLearning", "Naive Bayes classifier","nb = new Classifier(NaiveBayes, {distribution: D})\nnb.train(X, Y)\nnb.update(X, Y)\nnb.predict( x )","Create a new naive Bayes classifier assuming class-conditional component-wise distributions of the family D, where D can be any of the univariate distrubtions listed in the Statistics help section and is Gaussian by default. After an initial training with train(X,Y), the classifier can be updated online with new data by update(Xnew, Ynew). ", "X1 = 5 + randn(10,2)\nX2 = -3 + randn(10,2)\nX3 = 0.5*randn(8,2)\nX = [X1;X2;X3]\nY = zeros(28)\nY[0:10] = 1\nY[10:20] = 2\nY[20:28] = 3\nnb = new Classifier(NaiveBayes, {distribution: Gaussian})\nnb.train(X,Y)\nplot(X1,\".b\", \"Points of class 1\", X2, \".g\", \"Points of class 1\", X3, \".r\", \"Points of class 3\")\nx = -10+20*rand(2000,2)\ncolorplot(x, nb.predict(x), \"Naive Bayes classifier predictions\")\nnb.info()", "naivebayesclassifier.html"];

HELPcontent["LogReg"] = ["MachineLearning", "Logistic regression","c = new Classifier(LogReg)\nc.train(X, Y)\nc.predict( x )","Create a new logistic regression classifier and train it on a data set X labeled with Y.", ["// Binary example\nX1 = 5 + randn(10,2)\nX2 = -3 + randn(10,2)\nX = [X1;X2]\nY = zeros(20)\nY[0:10] = 1\nY[10:20] = 2\nc = new Classifier(LogReg)\nc.train(X,Y)\nxh=-10:10\nplot(X1,\"b.\",\"Points from class 1\",X2,\"r.\",\"Points from class 2\",xh,-(c.b+c.w[0]*xh)./c.w[1],\"_k\",\"separating hyperplane\")\nc.info()", "// Multi-class example\nX1 = 5 + randn(150,2)\nX2 = randn(150,2)\nX3 = -5 + randn(150,2)\nX = [X1;X2;X3]\nY = zeros(450)\nY[0:150] = 1\nY[150:300] = 2\nY[300:450] = 3\nc = new Classifier(LogReg)\nc.train(X,Y)\nxh=-10:10\nplot(X1,\"b.\",\"Points from class 1\",X2,\"r.\",\"Points from class 2\", X3,\"g.\",\"Points from class 3\", xh,-(c.b[1]-c.b[0]+(c.w[1,0]-c.w[0,0])*xh)./(c.w[1,1]-c.w[0,1]),\"_m\",\"Sep. hyperplane for classes 1 and 2\", xh,-(c.b[0]+c.w[0,0]*xh)./c.w[0,1],\"_b\",\"Sep. hyperplane for classes 1 and 3\", xh,-(c.b[1]+c.w[1,0]*xh)./c.w[1,1],\"_r\",\"Sep. hyperplane for classes 2 and 3\")\nc.info()"], "logisticregression.html"];

HELPcontent["Perceptron"] = ["MachineLearning", "Perceptron","c = new Classifier(Perceptron)\nc = new Classifier(Perceptron, params)\nc.train(X, Y)\nc.predict( x )","Create a new perceptron and train it on a data set X labeled with Y.<br>params should be (a subset of):<br>{<br>Nepochs: max number of epochs,<br>learningRate: value in (0,1)<br>}", "X1 = 5 + randn(10,2)\nX2 = -3 + randn(10,2)\nX = [X1;X2]\nY = zeros(20)\nY[0:10] = 1\nY[10:20] = 2\nc = new Classifier(Perceptron)\nc.train(X,Y)\nxh=-10:10\nplot(X1,\"b.\",\"Points from class 1\",X2,\"r.\",\"Points from class 2\",xh,-(c.b+c.w[0]*xh)./c.w[1],\"_k\",\"separating hyperplane\")\nc.info()", "perceptron.html"];

HELPcontent["MLP"] = ["MachineLearning", "Multi-layer perceptron","c = new Classifier(MLP)\nc = new Classifier(MLP, params)\nc.train(X, Y)\nc.predict( x )","Create a new Multi-Layer Perceptron and train it on a data set X labeled with Y.<br>params should be (a subset of):<br>{<br>hidden: number of hidden neurons,<br>loss: \"crossentropy\" or \"squared\" (default),<br>epochs: max number of epochs (default is 1000),<br>learningRate: value in (0,1),<br>initialweightsvalue: bound for uniform inital weights<br>}", "X1 = 5 + randn(10,2)\nX2 = -3 + randn(10,2)\nX = [X1;X2]\nY = zeros(20)\nY[0:10] = 1\nY[10:20] = 2\nc = new Classifier(MLP)\nc.train(X,Y)\nplot(X[find(c.predict(X)==1),:],\"b.\",\"Points classified with label 1\",X[find(c.predict(X)==2),:],\"r.\",\"Points classified with label 2\")\nc.info()", "mlp.html"];

HELPcontent["SVM"] = ["MachineLearning", "Support Vector Machine","svm = new Classifier(SVM, params)\nsvm.train(X, Y)\nlabels = svm.predict( x )","Create a new SVM and train it on a data set X labeled with Y.<br>params should be (a subset of):<br>{<br>kernel: type of kernel function (see help on kernel),<br>kernelpar: value of kernel parameter,<br>C: value of the regularization constant<br>}", ["// Simpe 2D example\nX1 = 5 + randn(10,2)\nX2 = -3 + randn(10,2)\nX = [X1;X2]\nY = zeros(20)\nY[0:10] = 1\nY[10:20] = 2\nparams = {kernel: \"linear\"}\nc = new Classifier(SVM, params)\nc.train(X,Y)\nxh=-10:10\nplot(X1,\"b.\",\"Points from class 1\",X2,\"r.\",\"Points from class 2\",xh,-(c.b+c.w[0]*xh)./c.w[1],\"_k\",\"separating hyperplane\")\nc.info()", "// Automatic tuning on the\n// image data set from IDA repository\ndata = loadURL(\"examples/image.train\")\nX = data[:, 0:18]\nY = data[:,18]\ndata = loadURL(\"examples/image.test\")\nXt = data[:, 0:18]\nYt = data[:,18]\nsvm = new Classifier(SVM, {kernel: \"rbf\"})\nsvm.tune(X,Y) // takes about 10 seconds\nrecRate = svm.test(Xt,Yt)"], ["svm.html","nonlinearsvm.html"]];

HELPcontent["MSVM"] = ["MachineLearning", "Multi-class support vector machine","msvm = new Classifier(MSVM, params)\nmsvm.train(X, Y)\nmsvm.predict( x )","Create a new M-SVM and train it on a data set X labeled with Y.<br>params should be (a subset of):<br>{<br>MSVMtype: M-SVM model type (\"WW\", \"CS\" (default), \"LLW\" or \"MSVM2\"),<br>kernel: type of kernel function (see help on kernel),<br>kernelpar: value of kernel parameter,<br>C: value of the regularization constant<br>}", ["// Famous Iris data set\ndata = loadURL(\"examples/iris.train\")\nX = data[:, 0:4]\nY = data[:,4]\ndata = loadURL(\"examples/iris.test\")\nXtest = data[:, 0:4]\nYtest = data[:,4]\nmsvm = new Classifier(MSVM, {MSVMtype: \"WW\", kernel: \"rbf\", kernelpar: 1} )\nmsvm.train(X, Y)\nplot( msvm.predict( Xtest ) )\nRecRate = msvm.test( Xtest, Ytest )", "// Handwritten digit recognition\n// with sparse input features\ndata = loadURL(\"examples/usps.train\")\nX = sparse(data[:,0:256])\nY = data[:,256]\ndata = loadURL(\"examples/usps.test\")\nXt = sparse(data[:,0:256])\nYt = data[:,256]\nmsvm = new Classifier(MSVM, {kernel: \"rbf\", kernelpar: 1, C: 10} )\nmsvm.train(X, Y) // takes about 1 minute\n                 // look at the web console for details\nrecRate = msvm.test(Xt, Yt)"] ];

HELPcontent["DecisionTree"] = ["MachineLearning", "Decision tree","dt = new Classifier(DecisionTree, params)\ndt.train(X, Y)\ndt.tune(X, Y)\ndt.predict( x )","Create a new decision tree and train it with knn.train(X,Y) on a data set X labeled with Y. <br>params should be (a subset of):<br>{<br>criterion: \"error\", \"gini\" or \"crossentropy\",<br>tol: number of errors tolerated at a leaf}", "X1 = 5 + randn(10,2)\nX2 = -3 + randn(10,2)\nX = [X1;X2]\nY = zeros(20)\nY[0:10] = 1\nY[10:20] = 2\ndt = new Classifier(DecisionTree)\ndt.train(X,Y)\nplot(dt.predict(X),\"_b\",\"Decision tree predictions\",Y,\".r\",\"true labels\")\ndt.info()", "decisiontree.html"];


HELPcontent["<strong>Regression</strong>"] = ["MachineLearning", "Regression","model = new Regression(algo, params)\nmodel.train(X, Y)\nyhat = model.predict( X )\nmse = model.test(Xt, Yt)\nstats = model.cv(X, Y)","Create a new regression model with the specified algorithm (or the AutoReg method by default). Any regression model can be trained on a data set (X, Y), with a " + htmlmatrix + " or " + htmlvector + " X and a vector Y, used to make predictions (with model.predict), tested (with model.test), cross-validated (with model.cv) or tuned to particular data set (with model.tune). <br><i>algo</i> can be either LeastSquares, KNNreg, RidgeRegression, KernelRidgeRegression, LASSO, OLS, SVR or MLPreg.<br><i>params</i> depends on the chosen algorithm, but typically has an object structure:<br>params = {<br> param1_name: value,<br> param2_name: value,<br>...,<br> affine: true or false (true by default)<br>}<br> For predictions, X can be either a single point or a set of points. ", "x =  0:0.3:10\ny = 2*x + 1 + 2*randn(x.length)\nr = new Regression()\nr.train(x,y)\nplot(x,y,\".k\",x,r.predict(x),\"_b\")\nr.info()", "regression.html"];

HELPcontent["AutoReg"] = ["MachineLearning", "Automatic regression","model = new Regression()\nmodel = new Regression(AutoReg, params)\nmodel.train(X, Y)","Create a new regression model and train it on a data set (X, Y) while choosing the best method and the finest set of hyperparameters. <br>params = {<br>linear: \"auto\", true or false,<br>excludes: Array of names of methods to exclude from the search<br>}<br>The parameter 'linear' can be used to restrict the search among linear or nonlinear methods only.<br><br>The parameters of the resulting model are stored in the 'model' field (displayed with model.model.info() ). ", "x = 0:0.3:10\ny = 2*x + 1 + 2*randn(x.length)\nr = new Regression()\nr.train(x,y)\nplot(x,y,\".k\",x,r.predict(x),\"_b\")\nr.info()" ];

HELPcontent["LeastSquares"] = ["MachineLearning", "Least squares regression","model = new Regression(LeastSquares, params)\nmodel.train(X, Y)","Create a new linear regression model and train it on a data set (X, Y) with the least squares method.<br>params = {affine : true/false} (true by default).", "x = 0:0.3:10\ny = 2*x + 1 + 2*randn(x.length)\nr = new Regression(LeastSquares)\nr.train(x,y)\nplot(x,y,\".k\",x,r.predict(x),\"_b\")\nr.info()", "leastsquares.html"];

HELPcontent["LeastAbsolute"] = ["MachineLearning", "Least absolute deviations","model = new Regression(LeastAbsolute, params)\nmodel.train(X, Y)","Create a new linear regression model and train it on a data set (X, Y) by minimizing the absolute loss.<br>params = {affine : true/false} (true by default).", "x = 0:0.3:10\ny = 2*x + 1 + 2*randn(x.length)\ny[8:10] = 20\nr = new Regression(LeastAbsolute)\nr.train(x,y)\nplot(x,y,\".k\",x,r.predict(x),\"_b\")\nr.info()", "leastabsolute.html"];

HELPcontent["KNNreg"] = ["MachineLearning", "K-nearest neighbors regression","model = new Regression(KNNreg, params)\nmodel.train(X, Y)","Create a new K-nearest neighbors regression model based on the training set (X, Y).<br>The default number of neighbors is K=5.", "x = 0:0.3:10\ny = 2*sin(x) + 0.2*randn(x.length)\nr = new Regression(KNNreg)\nr.train(x,y)\nplot(x,y,\".k\",0:0.1:10,r.predict(0:0.1:10),\"_b\")\nr.info()", "knnregression.html"];

HELPcontent["RidgeRegression"] = ["MachineLearning", "Ridge regression","model = new Regression(RidgeRegression, params)\nmodel.train(X, Y)","Create a new linear regression model and train it on a data set (X, Y) using ridge regression.<br>params = {lambda: value of regularization constant }.", "x = 0:0.3:10\ny = 2*x + 1 + 2*randn(x.length)\nr = new Regression(RidgeRegression, {lambda: 0.1})\nr.train(x,y)\nplot(x,y,\".k\",x,r.predict(x),\"_b\")\nr.info()", "ridgeregression.html"];

HELPcontent["LASSO"] = ["MachineLearning", "LASSO regression","model = new Regression(LASSO, params)\nmodel.train(X, Y)","Create a new linear regression model and train it on a data set (X, Y) using the LASSO (least absolute shrinkage and selection operator). The LASSO is particularly suited to cases where a number of feature variables are irrelevant and only a subset of them should be selected. <br>params = {lambda: value of regularization constant }, the higher lambda is the fewer variables will be selected.", "data = loadURL(\"examples/prostate.scaled.train\")\nX = data[:,0:8]\nY = data[:,8]\ndata = loadURL(\"examples/prostate.scaled.test\")\nXt = data[:,0:8]\nYt = data[:,8]\nr = new Regression(LASSO, {lambda: 50})\nr.train(X,Y)\nmse = r.test(Xt,Yt)\nwLS = [X,ones(Y.length)] \\ Y\nplot(wLS[0:8],\"b\",\"least squares estimates\", r.w,\"r\", \"LASSO estimates\")\nr.w // should have zeros", "lasso.html"];

HELPcontent["LARS"] = ["MachineLearning", "Least angle regression","model = new Regression(LARS, params)\nmodel.train(X, Y)\nW = model.path(X, Y)","Create a new linear regression model and train it on a data set (X, Y) using LARS (least angle regression). The LARS is particularly suited to cases where a number of feature variables are irrelevant and only a subset of them should be selected. model.train() is used to train with a fixed number n of features and model.tune() selects the best n, while model.path() is used to compute the entire path of solutions for all n (with one row in W for each n). <br><br>params = {<br>method: \"lars\" (default) or \"lasso\",<br>n: number of features retained by train() <br>}<br>Note that LARS always use an affine model.", "data = loaddata(\"examples/diabetes.data\")\nX = data[:,0:10]\nY = data[:,10]\nr = new Regression(LARS)\npath = r.path(X,Y)\nmse = norm(Y*ones(path.n)' - [X, ones(X.length)]*path,1)^2 ./ Y.length\nplot(path)\nplot(mse,\"\",\"MSE vs number of variables\")", "lars.html"];

HELPcontent["lars"] = ["MachineLearning", "Least angle regression path","W = lars(X,Y)\nW = lars(X,Y, method, n)","Compute the path of solutions with LARS (least angle regression). 'method' can be: \"lars\" (default) or \"lasso\". The argument n can be used to stop the path after the addition of n variables.<br>NOTE: this function does not build a regression model with train() and predict() functions. Use new Regression(LARS) for this purpose.", "data = loaddata(\"examples/diabetes.data\")\nX = data[:,0:10]\nY = data[:,10]\npath = lars(X,Y)\nplot(path)", "lars.html"];

HELPcontent["OLS"] = ["MachineLearning", "Orthogonal least Squares","model = new Regression(OLS, params)\nmodel.train(X, Y)","Create a new linear regression model and train it on a data set (X, Y) using the OLS (orthogonal least squares) algorithm (a forward stagewise regression), which is particularly suited to cases where a number of feature variables are irrelevant and only a subset of them should be selected. <br>params = {<br>epsilon: tolerance on the error ||y-Xw||,<br> dimension: max number of variables to select,<br> affine: true or false<br> }<br>", "data = loadURL(\"examples/prostate.scaled.train\")\nX = data[:,0:8]\nY = data[:,8]\ndata = loadURL(\"examples/prostate.scaled.test\")\nXt = data[:,0:8]\nYt = data[:,8]\nr = new Regression(OLS, {dimension: 5})\nr.train(X,Y)\nmse = r.test(Xt,Yt)\nwLS = [X,ones(Y.length)] \\ Y\nplot(wLS[0:8],\"b\",\"least squares estimates\", r.w,\"r\", \"OLS estimates\")\nr.w // should have zeros"];

HELPcontent["MLPreg"] = ["MachineLearning", "Multi-layer perceptron","c = new Regression(MLPreg)\nc = new Regression(MLPreg, params)\nc.train(X, Y)\nc.predict( x )","Create a new Multi-Layer Perceptron for regression and train it on a data set X labeled with Y.<br>params should be (a subset of):<br>{<br>hidden: number of hidden neurons,<br>epochs: max number of epochs,<br>learningRate: value in (0,1),<br>initialweightsvalue: bound for uniform inital weights<br>}", "x = 0:0.05:10\ny = 2*sin(x) + 0.2*randn(x.length)\nr = new Regression(MLPreg, {hidden: 15})\nr.train(x,y)\nplot(x,y,\".k\",x,r.predict(x),\"_b\")\nr.info()", "mlp.html"];

HELPcontent["KernelRidgeRegression"] = ["MachineLearning", "Kernel ridge regression","model = new Regression(KernelRidgeRegression, params)\nmodel.train(X, Y)","Create a new nonlinear regression model and train it on a data set (X, Y) using kernel ridge regression.<br>params should be (a subset of)<br> {<br>lambda: value of regularization constant,<br>kernel: type of kernel function (see help on kernel),<br>kernelpar: the kernel function parameter<br>}.", "x = 0:0.3:10\ny = 2*sin(x) + 0.2*randn(x.length)\nr = new Regression(KernelRidgeRegression)\nr.train(x,y)\nplot(x,y,\".k\",x,r.predict(x),\"_b\")\nr.info()", "kernelridgeregression.html"];

HELPcontent["SVR"] = ["MachineLearning", "Support vector regression","svr = new Regression(SVR, params)\nsvr.train(X, Y)","Create a new support vector regression model and train it on a data set (X, Y).<br>SVR uses the epsilon-insensitive loss function.<br>params = {<br>C: number (regularization constant),<br> epsilon: number (loss function parameter),<br>kernel: type of kernel function (see help on kernel),<br> kernelpar: the kernel function parameter<br>}", "x = 0:0.3:10\ny = 2*sin(x) + 0.2*randn(x.length)\nsvr = new Regression(SVR, {kernel: \"rbf\", epsilon: 0.3})\nsvr.train(x,y)\nyhat = svr.predict(x)\nplot(x,y,\".k\",x,yhat,\"_b\",\"SVR model\",x,yhat+svr.epsilon,\"_g\",\"epsilon tube of insensitivity\",x,yhat-svr.epsilon,\"_g\")\nsvr.info()", "svr.html"];

HELPcontent["<strong>SwitchingRegression</strong>"] = ["MachineLearning", "Switching regression","model = new SwitchingRegression(algo, params)\nmodel.train(X, Y)\nYhat = model.predict( X )\nyhat = model.predict(X, mode)\nyhat = model.predict(X, modes)\nlabels = model.mode(X, y)","Create a new switching regression model and train it on a data set (X, Y) with the specified algorithm (or k-LinReg by default). params depends on the chosen algorithm but typically includes<br>{<br>affine : true/false (true by default),<br>n: number of modes<br>}. After training, the model can be used to compute predictions or estimate the mode (classify the data)."];

HELPcontent["kLinReg"] = ["MachineLearning", "k-Linear Regressions","model = new SwitchingRegression(kLinReg, params)\nmodel.train(X, Y)","Create a new switching linear regression model and train it on a data set (X, Y) with the k-LinReg method.<br>params = <br>{<br>affine : true/false,<br>n: number of modes<br>restarts: number of restarts (default is 100)<br>}", "x = 10*rand(60)\ny = zeros(60)\ny[0:30] = 2*x[0:30] + 1 + 2*randn(30)\ny[30:60] = -0.5*x[30:60] + 2*randn(30)\nsr = new SwitchingRegression(kLinReg, {n: 2})\nsr.train(x,y)\nYhat = sr.predict(x)\nM = sr.mode(x,y)\ni1 = find(M == 0)\ni2 = find(M == 1)\nplot(x[i1],y[i1],\".b\",x[i2],y[i2],\".r\",x,Yhat[:,0],\"_b\",x,Yhat[:,1],\"_r\")\nsr.info()", "klinreg.html"];


HELPcontent["<strong>DimReduction</strong>"] = ["MachineLearning", "Dimensionality reduction","dr = new DimReduction(algo, params)\nXr = dr.train(X)\nX2r = dr.reduce(X2)\nX = dr.unreduce(Xr)","Create a new dimensionality reduction transformation and train it to reduce the dimensionality d of the N-by-d matrix X with the specified algorithm (or PCA by default).<br>params depends on the chosen algorithm.", "// Image compression with PCA\nX = zeros(30,30)\nfor ( i=0; i< 30; i++) {\n\tfor ( j=0; j< 30; j++) {\n\t\tX[i,j] = i + j\n\t}\n}\ndr = new DimReduction()\nXreduced = dr.train(X)\nimage(X,\"Original image\")\nimage(Xreduced,\"Compressed image\")\nimage(dr.unreduce(Xreduced),\"Uncompressed image\")\ndr.info()"];

HELPcontent["PCA"] = ["MachineLearning", "Principal component analysis","pca = new DimReduction(PCA, params)\nXr = pca.train(X)\nXr = pca.reduce(X)\nX = pca.unreduce(Xreduced)","Create a new dimensionality reduction transformation based on Principal Component Analysis (PCA) of the N-by-d matrix X. <br>params = { energy: e} where e is a number between 0 and 1 representing the minimum fraction of cumulative energy (sum of eigenvalues) conserved in the reduction;<br>or<br>params = {dimension : d} with d the reduced dimension.<br>By default, the method computes the dimension to retain 80% of cumulative energy.", "// Image compression with PCA\nX = zeros(30,30)\nfor ( i=0; i< 30; i++) {\n\tfor ( j=0; j< 30; j++) {\n\t\tX[i,j] = i + j\n\t}\n}\ndr = new DimReduction(PCA)\nXreduced = dr.train(X)\nimage(X,\"Original image\")\nimage(Xreduced,\"Compressed image\")\nimage(dr.unreduce(Xreduced),\"Uncompressed image\")\ndr.info()"];

HELPcontent["LLE"] = ["MachineLearning", "Locally linear embedding","lle = new DimReduction(LLE, params)\nXr = lle.train(X)\nXr = lle.reduce(X)\nX = lle.unreduce(Xreduced)","Create a new dimensionality reduction transformation based on a Locally Linear Embedding of the N-by-d matrix X. <br>params = {<br> dimension: desired reduced dimension,<br>K: number of neighbors per point<br>}.", "// S-shaped 3D data\nN = 100\nt = 3 * PI * (rand(N) - 0.5)\nX = zeros(N,3)\nX[:,0] = sin(t)\nX[:,1] = 2 * rand(N)\nX[:,2] = sign(t) .* (cos(t) - 1)\ndr = new DimReduction(LLE,{dimension: 2})\nXreduced = dr.train(X)\nplot3(X,\"Original data\")\ncolorplot(Xreduced,t,\"Locally linear embedding\")\ndr.info()"];

HELPcontent["ltsa"] = ["MachineLearning", "Local tangent space alignment","Xreduced = ltsa(X, dim, K)","Apply LTSA to reduced the dimensionality of X to dim using K neighbors.", ["// S-shaped 3D data\nN = 100\nt = 3 * PI * (rand(N) - 0.5)\nX = zeros(N,3)\nX[:,0] = sin(t)\nX[:,1] = 2 * rand(N)\nX[:,2] = sign(t) .* (cos(t) - 1)\nXr = ltsa(X,2, 8)\nplot3(X,\"Original data\")\ncolorplot(Xr,t,\"LTSA coordinates\")", "// spiral data\nt = range(100) * (4 * PI / 100)\nX = [t.*cos(t),t.*sin(t)]\nXr = ltsa(X,1,8)\ncolorplot(X,t)\ncolorplot(range(100),Xr,t)" ]];


HELPcontent["<strong>Clustering</strong>"] = ["MachineLearning", "Clustering","clustering = kmeans(X, ...)\nclustering = spectralclustering(X, ...)","Clustering methods perform unsupervised classification of a set of points stored as rows in X into a number of groups. The clustering output is a vector of labels where clustering[i] is the group index of the point X[i,:]. See each method help for more information. " ];

HELPcontent["kmeans"] = ["MachineLearning", "k-means clustering","c = kmeans(X, n)\nc = kmeans(X, n, restarts)","Cluster the data stored row-wise in X into n clusters with k-means using 100 restarts by default.<br>The result contains both the labels (in c.labels) and the centers of the groups also known as the prototypes (stored row-wise in c.centers).", "X1 = 5 + randn(10,2)\nX2 = -3 + randn(10,2)\nX = [X1;X2]\nc = kmeans(X,2)\nplot(X[find(c.labels==0),:],\".b\",\"Points of group 0\",X[find(c.labels==1),:],\".r\",\"Points of group 1\",c.centers,\".g\",\"Centers\")", "kmeans.html"];

HELPcontent["spectralclustering"] = ["MachineLearning", "Spectral clustering","c = spectralclustering(X, n)\nc = spectralclustering(X, n, sigma)\nc = spectralclustering(X, n, A)\nc = spectralclustering(X, n, func)\n","Cluster the data stored row-wise in X into n clusters with spectral clustering using either a Gaussian RBF affinity matrix with parameter sigma (which defaults to 1), a custom affinity matrix A or a custom affinity function func. ", ["// RBF affinity with custom bandwidth\nX1 = randn(50,2)\nX2 = 6 * [sin(0:50), cos(0:50)]\nX = [X1;X2]\nlbls = spectralclustering(X,2,0.5)\nplot(X[find(lbls==0),:],\".b\",\"Points in group 1\", X[find(lbls==1),:],\".r\", \"Points in group 2\")", "// Custom affinity function\nX1 = [-10:10, -10:10]\nX2 = [-10:10, 8:-1:-12]\nX = [X1;X2] + randn(40,2)\nfunction affinity(x1,x2) {\n return ((mul(x1,x2)/(norm(x1)*norm(x2)))^2)\n}\nlbls = spectralclustering(X,2,affinity)\nplot(X[find(lbls==0),:],\".b\",\"Points in group 1\", X[find(lbls==1),:],\".r\", \"Points in group 2\")" ], "spectralclustering.html"];


HELPcontent["<strong>ML utils</strong>"] = ["MachineLearning", "Basic tools for machine learning","","The following help topics concern commands providing basic tools for machine learning."];

HELPcontent["distanceMatrix"] = ["MachineLearning", "Distance matrix","D = distanceMatrix( X )","Compute the matrix of pairwise Euclidean distances between rows of X. " ];
HELPcontent["kernel"] = ["MachineLearning", "Kernel functions","val = kernel(x1, x2, Ktype, param)","Evaluate the kernel function K(x1, x2) for the given parameter value. The definition of the kernel function depends on Ktype, which can be any of the following:<br><br>\"linear\": K(x1,x2) = x1'*x2<br>\"rbf\": Gaussian RBF<br>" + htmltab + "K(x1,x2) = exp(-||x1-x2||^2 / (2*param^2)<br>\"poly\": homogeneous polynomial<br>" + htmltab + "K(x1,x2) = (x1'*x2)^param<br>\"polyh\": inhomogeneous polynomial<br>" + htmltab + "K(x1,x2) = (x1'*x2 + 1)^param<br>func: custom kernel function<br>" + htmltab + "K(x1,x2) = func(x1, x2, param)<br><br>The specification of the kernel function type is similar for all machine learning algorithms based on kernels.", "function myK(x1, x2, par) {\n return (par * x1*x2)\n}\nkernel([1,1], [2,2], myK, 0.5)", "kernels.html"];
HELPcontent["kernelFunction"] = ["MachineLearning", "Kernel function","K = kernelFunction(Ktype, param)\nK = kernelFunction(Ktype, param, inputType)","Return a kernel function K to use as K(x1, x2). For multiple evaluations of the same kernel function, this can be much faster than kernel(x1,x2,Ktype,param) which must parse the kernel type and parameter at every call.<br>The definition of the kernel function depends on Ktype, which can be any of the following:<br><br>\"linear\": K(x1,x2) = x1'*x2<br>\"rbf\": Gaussian RBF<br>" + htmltab + "K(x1,x2) = exp(-||x1-x2||^2 / (2*param^2)<br>\"poly\": homogeneous polynomial<br>" + htmltab + "K(x1,x2) = (x1'*x2)^param<br>\"polyh\": inhomogeneous polynomial<br>" + htmltab + "K(x1,x2) = (x1'*x2 + 1)^param<br>func: custom kernel function<br>" + htmltab + "K(x1,x2) = func(x1, x2, param)<br><br>The inputType is \"vector\" by default and must be set to \"number\" for scalar inputs and \"spvector\" for sparse inputs.", ["K = kernelFunction( \"rbf\", 0.5, \"number\")\nK(1.5, 1.9)", "X = randsparse(0.2,100,100)\nspX = sparse(X)\nK = kernelFunction(\"rbf\", 0.3)\nspK = kernelFunction(\"rbf\", 0.3, \"spvector\")\nK1 = K(X[0,:],X[1,:])\nK2 = spK(spX.col(0), spX.col(1))"], "kernels.html"];
HELPcontent["kernelMatrix"] = ["MachineLearning", "Kernel matrix","K = kernelMatrix(X, Ktype, param)\nK = kernelMatrix(X, Ktype, param, Xtest)","Compute the kernel matrix for the data stored as rows in the matrix X with kernel function of type Ktype anda parameter param. If Xtest is provided, then this computes the unsymmetric matrix of size X.n by Xtest.n.", "X = rand(10,5)\nK = kernelMatrix(X, \"rbf\",0.5)"];
HELPcontent["kernelCache"] = ["MachineLearning", "Kernel cache","kc = new kernelCache(X, Ktype, param, size)\nKi = kc.get_row( i )\nkc.update( newparam )","Create a cache to store at most 'size' kernel matrix entries in memory. The memory is filled and accessed with get_row( i ) which returns a row of the kernel matrix. kc.update() is used to update the kernel matrix entries efficiently upon a change of the kernel parameter.", , "fastkernelupdate.html"];
HELPcontent["knnsearch"] = ["MachineLearning", "K-nearest neighbors search","knn = knnsearch(K, x, X)","Search for the K nearest neighbors of x in the rows of X and return their indexes (in knn.indexes) and distances to x (in knn.distances)."];
HELPcontent["normalize"] = ["MachineLearning", "Column normalization","Xn = normalize(X)\nXn = normalize(X, mean, std)\ninfo = normalize(X, true)\n","Normalize the columns of the matrix (or the vector) X to zero mean and unit variance, or by applying the transformation Xn[i,j] = (X[i,j] - mean[j]) / std[j] (if mean and std are provided). The command normalize(X, true) returns the object info = {X: Xn, mean: mean(X,1), std: std(X,1)}." ];
HELPcontent["ar"] = ["MachineLearning", "Auto-regressive data set","data = ar(x, order)","Given a time series x, return an observation matrix data.X with 'order' columns and a target vector data.y to perform time series prediction via regression.", "t = 0:0.3:10\nx = sin(t) + 0.1*randn(t.length)\ndata = ar(x, 2)\nmodel = new Regression()\nmodel.train(data.X, data.y)\nplot(model.predict(data.X),\"b\", data.y,\"r\")\nnext_x = model.predict( [x[x.length-1], x[x.length-2] ])" ];
HELPcontent["loadmodel"] = ["MachineLearning", "Load model","model = loadmodel( url, format)","Load the model stored at the given url in the given format (\"libsvm\" or \"msvmpack\"...).", "svm = loadmodel(\"examples/heart_scale.model\",\"libsvm\")\nsvm.info()" ];
HELPcontent["loaddata"] = ["MachineLearning", "Load data","data = loaddata( url )\ndata = loaddata( url, format)","Load the data stored at the given url in the given format (\"libsvm\", \"msvmpack\"...) and return an object {X: observation matrix, y: label vector}. <br>By default, without a specified format, the data is loaded as a matrix from a text file with one row per line and columns separated by spaces or commas.", ["// Load a data file in default matrix-text format\ndata = loaddata(\"examples/iris.train\")\nX = data[:,0:4]  // get observation matrix\nY = data[:,4]  // get labels from last column", "// Load a data file in libsvm format\ndata = loaddata(\"examples/heart_scale\",\"libsvm\")\nX = data.X  // get observation matrix\nY = data.y  // get labels"] ];

