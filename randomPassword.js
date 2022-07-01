var gen = document.getElementById('generate')
        const random = (noOfdigits) => {
            var result = "";
            var f = "QWERTYUIOPLKJHGFDSZXCVABNMqazxswedcvfrtgbnhyujmkiolp0123456789";
            var fLength = f.length;
            for (i = 0; i < noOfdigits; i++) {
                result = result + f.charAt(Math.floor(Math.random() * fLength));
            }
            gen.innerHTML = result;
        }