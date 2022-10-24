var gen = document.getElementById('generate')
        const random = (noOfdigits) => {
            var result = "";
            // var f = "QWERTYUIOPLKJHGFDSZXCVABNMqazxswedcvfrtgbnhyujmkiolp0123456789";
            // var fLength = f.length;
            for (i = 0; i < noOfdigits; i++) {
                // result = result + f.charAt(Math.floor(Math.random() * fLength));
                let tempCode;
                tempCode = 48 + Math.floor(Math.random()*(122-48))
                if((tempCode>90 && tempCode < 97) || (tempCode>57 && tempCode < 65))
                tempCode+=7;

                result += String.fromCharCode(tempCode)
            }
            gen.innerHTML = result;
        }
        console.log("Hello world");
