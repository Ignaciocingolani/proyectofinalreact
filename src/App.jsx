
import './App.css'
import NavBar from "../src/components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/itemListContainer"
import Product from "../src/Product"
import Contador from "../src/Contador"
import ProductChildren from './ProductChildren'
import ItemCount from './ContadorBtn'


function App() {
  

  return (
    
      <div className="App">
        <NavBar/>
       
        <ItemListContainer greeting= "Vapea con estilo y libre de humo." />
        <Contador/>
        

        <ProductChildren img= "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEhIQDw8QEBAQFRIQEBcVDw8SFRAVFREWFhUWFhsYHyghGRolGxUVITUhJTUtLi4uFx8zODUtNygtLisBCgoKDg0OGhAQGi0mHx0tLS0tLS0yLSstLS0tLS0tLS0tLTAuKy0tLS0uLS0vLSstLS0rLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xABREAABAwIDAwcHBwkEBwkAAAABAAIDBBEFEiETMUEGByIyM1FxFCNhc4GxwUKRobKzwtEkQ1JicoKSovAlU5O0FTRjZISjwxc1RFV0lNLT4f/EABoBAQACAwEAAAAAAAAAAAAAAAABAgMEBQb/xAA7EQACAQICBQgIBQQDAAAAAAAAAQIDEQRxBSExQWESMjNRkbHB8BMUNFKBodHhFSIjQmJTcrLSBhai/9oADAMBAAIRAxEAPwDuKIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgC1Tl/ynkw6KJ8UbJHSyFnTzWaBG55NhvPRAW1rnHPWPMUvr3/5eRSiGaseeavu0eS0vSa1357S/wC8pU/O9WRx7U01M4DLcXlbe7gNDc239y5S/fF6tnvWQxP/AFY/u/aBCD6qab6qpUs3DwCqUFgiIgCLSecLljNhpibDFHIXxzSkvLvzZYA0AW359/oWnP53q0PLPJqbS2vneIv+khFzs6LlNLzn1RlpmPp4C2eeCB2UyNLRK8NzC5O6+5dWQJhERCQiLmvLvnAqqCqNPDFA5rWwkl4kJJkJvuIsAAEB0pFw6LnjxAuLfJ6SwJHVm4G36azvJ/nKq566mpJYafJUuewlgka5hbGXA6uIO61lNiLnVERFBIXFcS52K9j5AyGlyt2haCyUmzXkAE59TpvXal8s46LSSj0VH2pUohm70HO3iMm+KkGh3Ry//Nbxzb8r58SNW2dkTTTOia0xh4zCRhdqHE6iy4Ng3wPuC6xzFdfE/WU32TkaIW06wiIoLBERAEREAXOeersKT17v8vIsnyx5XTUM0cbII5GOj2hc6UtIOYiwAbu0ve651yw5WT4k2OOSCKFsL3SNLZnPL7sLNQQMujj3rG61NOzaNqOBxNSHLhBtPfY5086w+rb71kMRP5Of3PtQqpcJd0S1zbsaGgE2vZXH0MsjNk8sY021Dy46OzbtO5T6el7yJ/DcX/Sl2H1K3cFUuVv50agAZaOFx0BvUubpxPVPzK1PzsVQ6tDTkcb1bh/01X09P3kW/DsX/Sl2HWUXJ2c61Ud9DAP+LefuK+7nQmsctJETwvUOFz/Cnp6fvLtH4bi/6Uuwj8+A6VOf93q/rQrlcvbHwb9Ure+cDGJK2CmnlibC8xV7C1shkb0TBY3IHf3LQpe2/dZ7is0Wmro0qsJU5OMlZrU0Z6mHn8PH++UP2zV9Ir5toz+UYf8A+soft2r6SRlY7AiIoLBcH54R/aEn7FIf5nBd4XCOeM/2g/1dH9o9SiGc+h7R/wC073hbdyQ1xfDvWyn/AJD1qEfav/aPwW4cjD/a+Hesm/y71LKrafRKIomIyPZFI6MNdI1j3MDnFrXODTlDiASBe2tiqN21lyWvlnHu2m/4r7Yrt1Rj2MMA/JcPLuI8qqQBpwOy1XNKnkPWSFznPp8zg8G0kny3Zj8la8cdh/fRRyRqGDH3H3LrPMUenifrKb7Jy02DkBiEZ6BpHDhmmmB3eiNbfyIwzEcN8ocxtJIakxueHTTAMMbS0ZSGajXj3J69h/fQujriLQ3cpMXF70uH8cv5VUajhfzeitN5U4yf/CYb/wC7qf8A6lHr2H99FuUjoKLSIeUGLHfTUAPC1RUH/pqbhWJYrJMxssFC2A32jmTzmQaHqtLLHW28osbh20lNawpJm1IiLaJOW87B89H6ofaPXO3LofOyPPR+qH2j1zxy5FfpZZ+CPeaN9ipZP/KR4q2qhXGrEzciHqy5Xnqy5ETMqaplNTSOu4NZkGgOcXJ46W04KG1ZvDey/ePuClPgYa3K5P5W1r3W8U+4h1rZ5o44nsZG2ITtBEmYuEuS53C1tmO/esZNgkhdnblLtBYuAGnsWwPQLZjiZxVlbz8Ti1dF0Ks3Obk23d619DF0lFOJIHubG3yeWGdtn5s5ieHAHQWBtvXR5ecWpFrUUJF9fyoiw/g1WntXsiet1OHYQtDYb+Xb9jZ5ecusBs3D4CO81bgb+GzV2LnIqja9DCO+1U42/kWllXGKfWqnDsIWiMP/AC7fsbnJzh1VjkooSeANS4A+3ItR5SYZX4nKap8MMW0bE3K2cvtsibalo3kngq41tOHdkzw/FaWN0nXoU1KFr3trT6nxNfF6MoUoJxvrfXwyObu5B14cXt2Ti4kkGUNt9BWZwHk1iMFVT1ZihJpnOeGbfR+ZhYRmtpv7it7Yr0S5L/5DjP49j/2NH1OnxPZeVOJAj+z4CNbny4gju02eqi1PK3E3BzBhtPZwLb+Xm+otu2Sk1CiFFp/FyWtR7H9Q8LT4+fgRHYniEhuaOnbff+WE2/kXj5MRtdlLTuPAGrLfpyFZOJToFovSM1qUIf8Ar/cr6lS49pCps+Vu1aGSWGdrXZw11tQDYXHpUtitTdZyusW6ndXOVJWk152kWdWmK7OrTFZFSXEszhW8f1wWGiWZwvrDx+Cml0sP7l3otHajNoiL2hmOXc7fbQ+r+85c6K6Nzt9tD6v7zlzly4tbpZZnvNH+xUsvFngVxqthVNWM3UVPVkq+5QmVIc4tFja+ocOG+7et3dL0qYplak1FpPeSGrOYb2X7x9wWDas7h3ZDxcoRSrzfieOQI5ArGrvK2r2TcvGqqTcoL7iMVcYrZVxikoiQxbVQdkzwHxWrMW0Yf2TPD4lcvSvQrNdzNTSHMWfgyYxXolYYr8S87I5R5UKIVMqFDKmGwhl6JTqdQYVOp1SZZFqbrOV2NW5usfFXI13FsR56fOeb7yLOrTVdnVlqyIqTIlmcL6w/rgsNEsxhPWCUulh/cu9Fo7UZxERe0Mxy/na7aH1f3nLnL10Xnb7aH1f3nLnT1xa3SyzPeaP9ipZeLKQq2qkKpqxm4ityx1O4bR+/87bSTJ2gzZb/ACr2vbisi5QYozfMQL2Ie7odN2Yai27j/L+irR2Mx1ruUbefPnqclqzmH9kPFywTVnsO7IeLlC2irzfiUuQI5eMUmoXWqqRUsK9lUGTcRyq2qJT1WckZdASLhwINj7CD4jhxUtis1YxxknrRIjW1UHZM8B7ytPNbE17InSNEknUaTq7+rLbqDsmeH4rlaVVqMc13M1Me04JJ7H4ExikRqOxSI152RyymoWLo6ragnI5ljYhwI1ue8dwHo13lZOpaCLEAg6EEXBWucnpB02tkido1xaLZt3WPTdb0t0AKzUop05PerFZPWbBEp1OoESux4hA2VsDp4hO8ZmRl7Q9wF7kN3kdF3zHuWCSb2Frl6brHxVxitT9Yq4zcu3Hmo8/PnPN95heUj5hGBA8Mle4Mbuu4kHRtwQDpc3G4O3bxXhshdHG5xzEtaSbWuba30GvsHgNyo5QtaWtDnytu4BgjEedz7EjKXDokAO1BHHVXaFgaxgAIAaBZwYCLDjl0v4aLPq9GkVMjGQNToBqfQpPJLGqasBkpZRKxj3RuIDxZwaD8oA2sQb7jdYyvtsZbi42cl9bX82ePBY/mknhftjDPNOGljC6WVshGVrmtaMrG2bYA2/WV6FNuSlbZKOWuS25l4LWdPREXrjKcu53O2h9WPruXOXLo3O520Pq/vOXOXLi1uklme80f7FSy8WAqmqgKsLGbiK3LHxDzrzbeMvsaePdm3jgQDop5WOpgNo8g3PT4DXM8a5g3Xd7FeGxmHEW5UM/Bkxqz2H9kPF3vWBas9h/ZDxd71QmrzSl68avXLwKxq7y6xevVLFVIoMi2GHw64Lwd1wW6utYufq2+4afR4LJtWKwprQ6TK0NaSC0ZC3S7+8a6g63PgFlI1kqbTWocxGHxOSMVTAZHNc7yazQYwJbTm17i+hudF0qg7Jnh+K57UOeKpvTmDCIRZtNtGnpuvmcRZm8bl0LD+yZ4fiuZpjoIZruZp4pPku/vcOPF+GW9ymKTGo7FIjXmZGiimdYHAz0Xm51PF7X3OuoI36WNzvudwsszXucGOLQS4NJaBa5NtN6xWExlrSDtb3Is+2gGgy23NIANuF7LPS6KXGxV7TKwrUq/Zf6UivPlftKciPYU5Li1kYBEhO0aLSnQaaP9N9siWsyTRjFWtdLTB5MGRrqB8spGz+TMBaPjvV8Mnyp2V/yPjvXB9urNFZ7FmbhN13eKrZuVE3Xd4q4xdBc1ZHDnznm+817lc5oiGdgezM0vDnNY1wBtlznVhJIsRrpbS91IwgWhi3dRm61uqN1tCPSoXLRwyMaZYGZnHovEm0f0SDscjgc1i64IIIOtt6m4T2UWlug0nde5Gt7OcL+0+JWy1+ks358/QruJtWCYpAL3MTwLXJvkNrW1urfNjPK5jhKa5xaWN/KqaOnPU12YaLlvpdqrlSBs5ARmBY8EXy5uidL8PFYvmYphFFK3IyPzgOUOpXloyaBz4nHOR+k4NJ7lNCOtPqlH/JefOu8Np1JEReuMpyznZd56If7MfTI/8Fzty6Nzt9tD6v77lzkrjV+llme80d7FSy8WeBVNVIVbVjNyJ65QKfrk5C24dvjcL5nNJBcW9K1v64T3q0Ui7J8SlSN2n1HrVnsO7IeLvesA1ZzDT5rwLvgUK1OaHI1HrwKTVLrF7KdLrxi9lUF9xiMMaRmuNTYk5QL3LuO863399+KyTFQVcYrydzFTjyVYw+IQk1cTsjsoEV3Egt650DbixG+9z4FdJoOyZ4fiuc4k+PyiJpii2hMBEjpYQ8Da9VrXdI7ju710ag7JngPiubpd/oQzXczn4pJKXGXhkr5682SmKRGo7FeiXmpGijyoUUqVUKI5TDYGSIlq1SJji8WXyswAR7S/lewBy6bPZdC/6W1sFs8S17EYITiEDhRzuqBLAduXuELWAahg2gBdbTq71lpWvLJ9T72u1XfBlZbPibXP13eKuRq3P13K4xdNc1ZHCnznm+8i1CtMV6oVlqyIqXZ3AMeSA4BriQSAHDKbgk6AHvUPmsnikM74YaSnYXRjZ00sUrWkRm5c6NrRmPt3KZLfI7LfNldlsGk3ym2/T59FC5qY3RiaJ5kMgkzvz+SElz2XLy6Euu421zEkWHCyz4dL48qPet3YXhtOlIiL1plOXc7h89D6sfXcucFdG52h56P1Q+0eucuXGrdLI93o/wBipZPvZ4FWFQFW1YjcieuVlyuTSBo1v0jYWBcSfAKy2QE21Dm/JcCDbv8ASFKTtcrOSvyb6y41Z7DuyHi5YFqzuHHzQ8XIVqc34njl41HL0KxqlbFVIqGFeyFVLbiwSq2K2VcYrMojG1zHCphlObZt2bQdlEWhz3lt7l2a5uBoDa/iuiUPUZ4fErTfIIXSCZ0bTI0ANcdSLXtb5ytxoOzZ4D3lc3S0r0YLqa7maOMg4xb65X693yy+ZMYr0asNV6Neckc5CoUUqRUKKUjsDL8S1erpR/paGZ7I7DZxscaOoN3ObvMoAZnOjW3JA7rm62eJUMwOF9Q2qftHSMsWAyybNhDctwy+W+u88dVkp1FTcn1prt1dayfDrKyi3sJ1R13eKrjVuoPTd4quNdSPNRwp855vvI9QrLVFqMUZ0iGTujaSHSCO7BY2JGuZwH6QBHpUiM3sQbg6gjUEHiFl5LW0qSgwOBa4Xa4FpHeDoQslyWw2CmtHTwxwsJzEMYGgm1rm282A1PcsfEVmsG6wU0m/SRW7lLvRaO0z6Ii9kZjlvO520Xqx9o9c5cuj87vaw+r+85c3euNV6WWZ7zAex0svFngVbVQFUFjaNqJH8rYbkWdk6LMj2m5c7Z2d+jrb2KPU1Uem0Y9pAPymghp3m7Hd7Nw13aKTLA4uFjpnL3aDXz4lAb09N2XUcVZcHh2dov0cljnHynOO4O7wssbX+5qVOXaz37dStnbVsWrbuJEJPSYTmLTx/Rdu+LfYtgw3sva74LXqdp1J1Ljc6FvCwaL/ANb1sOH9iPF3vWN7TL+xX6/lrt8jxyBePQKTXLjFTVTBtgbkuvYAEk23nTcN2p01C9abKAK5r/OtbmcbRsDJGkODwX79wNmm44JFCU0la5djmDr2vcbwQQR4gq+1YmSrjc5uZsrHus0WeGluaxbfK7XrDvtrewushRvJBBNywmMmwF7WIOnGxCtKNjHCd3bz9vsT4ltOH9kzwHxWl1FS5joWtAIlkyOve4GRztPTcLc6Hs2eA+K5WlV+is/qa+OmnHkrc1f4q5KCvxqO1XTKGNc9xs1oLnHuAFyfmXnWjmFrEKyKPKHvDS6+UalzrWvYDU2uPnViGdkgD43B7TcAggjQ2I8QQR7FDmxSBhfUPbMx5AhkaYi58YiaZTfJfo5ZQ7S+8cdFBM8Mkp2NRPBNLa7TA4MztzAbVr2aOIYRa7S5rNDxWxCn+W9nnu7vmmUctZskSn0u9YfC6raMDiMrrujeNbB7HlkgHeMzTY8RZe1eNiCoo6fZlxrHStDswAj2bA69uN7ju4rC6M5txirvX8k2/kmW5SSuzI1HXd4rH4zjDKVrCTDme4taJJmxA5WF7rEg3PRsBxLgLjeshUHpu8fgo1bTbRoHS0LrhuW5DoXxnebfLv7F2IWsr9XgcGfPeb7zESYk2nBjZA8w0zQzNtG3a2OBjzoTc2Y9vpJB8TDoaiIN2tOySJkbo2uZcZJI5HBocBcgEA5tLO6NjoVfnwuUxTNkdmkmbKC5sYY274GRNs3O4iwjBOp1v4L2kppCIoX2EUWS3QlLpdnbZ5jbKyxaCQCb24DQ7UeSo9/H4bHq7yNRsUa95C4rJUTVjJAwCmqpKePKCLtaxpBdc6nUqiIqHzY9viZ4HEJ7emzGAqMPFOV+px/ziTHadJREXrTMcu53R52H1f3yubPXVOc3kVXV8kVRQ1EbHRxmJ8cjnNa8ZswcCA4E6kWI9q5xNyF5SRk3pmTD9WSjPxaVoVMLKU3JPaeiwmmqVKhGlOMvyq2qzvrb3tdZBCuBW6jBcdivnwuV37MDn/ZkrHz19TB/rNDLEO9zJovrNWJ4Wpw7TehprCva2s19LkiR0wO59s/S0zdDO7q/uZf5vQDZdUuF9eqL7hcizD/Fq8W/VVDeUNORukb7I3D6CqnYzTj847+B/wCCejnvgS8Zhpc2uvi7Psdu4mxX4kHw4rYMP7EeLvetSbjFN/ef8t/4LaMHnbJAHMJLLvG48CsUqckrtWNmOKoVPyU5pvg76it6NVL161VKXLrFj/JHAxm/RjDL9AXcWMkaLWdoPOd3BTmrFGWoblzZgNc+maxEQOm/5d/Zbje1oplajSs2vP0PGRvY4uaA64Yw32gtkYwX0ab6g6KfSMs3U3cTmebFtyfQdw4exY51XJ3jeBuB3vLQfDcT3C6ykN+NvZ3cFMr2MdJpvVn262Waw+cpe/auPzROut4oeo3wHxWrRLZ6Hs2eA+K5OlX+jFdT+pr4ynyU5X5zXyjYltKpr6fawzRWadpG+OzhcXcwgX9C9avK6V7IpnxtzSNY9zG/pPDSWjcd5suBvOczB1eHSN27GNa2F7J9lpJHlMlPHGGZS0ADMx7r3+UPSo5aI6ieYwxyukLTC7NTtMZaHA3LzdoOYatud+m68mXHJQ5zDszZj5GFzC3aESOa1oFwQXBoNjqL8bI3F5C9rMjek8RX6QsTnNjv6Vo3Ejh0d91vKFSMWmtqs7vin23XelYxfl3GVwmnMcYaXBziXyOI3F0kjnut6LuNvRZYvH/+8cI9ZU/ZNWapXOIBc3KeIuDbXvUmKiifJHK+NrpIs2ycRqzMAHW8bBa9KuqVRzkt01qt+6MlltZecOVGy4fJlypPTd4/BQcTExDDDm0cc2V1jaxsTrctva4GvctV5T4xjsFVNscOdNTB3mnikqHhzbDXMwrHw86D4jlq6B0Z9EjmO/hkaPevQU9H4jkRmop6lvXVxscWcXynmzOtqqtotJtg4HpEszDLmiFwbHMQDKbDuA13uk4RUVD77R4DgInEFrdMzAXtBbbVpzC+vBYWPnMoH3uypZ4xxOv/AAuK9bzjYd31H+D/APqOhWt0b18Ctn1G8xFZvAx0guXP5zKBo6LKp/hHGPrOCyHI/nFkra6ClpaN2zc4maR7s5jZlcSbM0bqALk8bWUUsDiPSRfIdk0+xiMXc7GiIvTmYIiKAEREBh8Q5MYfUdvQ0sp73QRE/Pa6xM3Nngb9+HQj9kyM+q4LbkQGnx82OBt3YdEfF0zvrOK1PlbzaVbZjLgzoIYXMaHQXMYDm3u5twWkkW323LriI1faSpNO6dnw1Hzy7kpylj61Hte4h9G76rwVDnpMdiBz4XNp3U0sn2bivpJFR0oP9qM8cXXjsnLtb7z5hfyhniNqqikitvzCWL6Ht+KvN5U0zgLiRt/1WuH0L6Wc0EWIBB4EXWEruSGGTm82H0jz3mniDvnAusbw1N7jPDSeKj+6+aXgkzgjuUVKPzrv8OT8FWzlDSf3p/w5PwXZZebLBHanD4x+zJO36rgq4ubXBG7sPiP7TpX/AFnFR6rT49pk/FsR/Hsf1OKS8rKeMXa17/4Yx85/BTYuWGJRsbmwqXJa7Dsqpt2nUG5YQd+8b13LDuS2HU5DoKClicNzm08Qd/Fa6zKpPA0Jq0o3zv8AYwVsfiKuqUuxeWfOY5z8htLRFp4+fsfmcwLKUHOdQu68dTH6csbx/K6/0LucsDH6PY1w9LQfesNXcjsLnvtcPpHE7z5PG138QAK1Z6FwUv2NZN+LZiWIqLec7PLPC5hbyqMX4SMkZ9cAKz/pjCwdKihFv16dbTW80GCyatglhP8As6iX3OLgFjJeY3DCbtqK5vo2kB98a1v+v0FzJyXY/BF/W5b0iI3lPh431tL/AI7D7irU3OBhkOpnMhGto4pHX9tg36VlIOZDCm9aatf4yxN+qwLL4fzU4LCQfJNqR/eyyyD2tJyn5lC/47h3zpy+Fl4Metz6kbFyaxEVVLBUNa5jZo2yNDrXAcLi9uNlkJ6dkgyyMa8dzmhw+Yr2KNrQGtaGtaA1oAADQBYAAbgri7sYqKSWxajVes16p5EYTISX4bRkneRTxtJ9oAUT/s2wT/y6D5n/AIrbEVga5T8hsIjILcNo7jcTTxuP8wKzlNSxxDLFGyNvcxjWj5gr6IAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgP//Z" 
        title="Fume Unlimited 7000"  
        price="30.000"
        stock= {18}
        >
          <p>Vape descartable marca Fume de 7000 puffs</p>
    
        </ProductChildren>


        <ProductChildren img= "https://www.tiendavapor.com/image/cache/catalog/Nikbar/nikbar6000-500x500.jpg" 
        title="NikBar White Slush" 
        price="28.000"
        stock= {12} 
        >
          <p>Vape descartable marca NikBar de 6000 puffs</p>
    
        </ProductChildren>

        

        <ProductChildren img= "https://indyargentina.com/cdn/shop/files/9f5f54a6-684e-4fdc-9793-82befcb2bd3b.jpg?v=1688569178"
         title="Elfbar BC5000"   
         price="25.000"
        stock= {8} 
        >
          <p>Vape descartable marca Elfbar de 5000 puffs</p>
    
        </ProductChildren>


        <ProductChildren img= "https://cigarrilloselectronicos.com.ar/cdn/shop/products/Numero00132_210cc6ea-7354-4364-95dd-e5c6e61de40b.webp?v=1662035711"
         title="Ignite V15"  
         price="12.000"
        stock= {10} 
        >
          <p>Vape descartable marca Elfbar de 5000 puffs</p>
    
        </ProductChildren>

        <ProductChildren img= "https://diyvape.co/cdn/shop/products/gdW6jXypR6aAM7Jgddlf_blueraspsalt_1.jpg?v=1623906024&width=1100"
         title="Frozen Fruit Monster" 
         price="10.000"
        stock= {9} 
        >
          <p>Sal de nicotina importada, marca Fruit Monster</p>
    
        </ProductChildren>


        <ProductChildren img= "https://acdn.mitiendanube.com/stores/003/000/926/products/9c13032f-3d65-4b30-990e-9e110375b01f1-94d65205492b1e1e9816918767209640-1024-1024.jpeg"
         title="Cush Man" 
         price="9.500"
        stock= {6} 
        >
          <p>Sal de nicotina importada, marca Cush Man</p>
    
        </ProductChildren>




        <ProductChildren img= "https://rosariovapeshop.com/wp-content/uploads/2020/10/Jack_vaper_tribeca.jpg"
         title="Jack Vaper" 
         price="6.000"
        stock= {25} 
        >
          <p>Sal de nicotina nacional, marca Jack Vaper</p>
    
        </ProductChildren>



        

       

       
      </div>
  
  )
}

export default App;
