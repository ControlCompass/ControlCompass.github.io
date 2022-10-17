# Control Validation Compass
https://controlcompass.github.io/

Pointing cybersecurity teams to to 9,000+ publicly-accessible detection rules and 2,100+ offensive security tests, aligned with over 500 common attacker techniques

***Like the content you see on Control Validation Compass? Consider checking out the freely available [Community Edition of the Tidal Cyber platform](https://app.tidalcyber.com/) for additional useful functionality***

# What is Control Validation Compass?
Control Validation Compass ("CVC") is an open source tool and dataset designed to speed the process of a) identifying security control gaps and b) closing those gaps by pointing teams to relevant detections. CVC promotes a control validation or "purple team" approach and mindset by also pointing teams to relevant offensive security tests, so they can immediately validate the effectiveness of new (or existing) controls.

# Anticipated Uses
Intelligence Teams: CVC was built with intelligence teams in mind. These teams identify threats to the organizations they support, but often have less immediate visibility into their internal controls landscape (or may have little/no visibility into detection capabilities if using a managed service). CVC puts more resources and potential context directly into these teams' hands.

Defenders / Blue Teams: The Threat Alignment page provides a quick & easy way for any team to instantly identify potential gaps in control coverage that should be filled with new detections and then tested. If new detections must be created, each page of CVC points teams to many resources with potentially relevant logic.

Offensive Security / Red Teams: Red teams can use CVC to identify where control coverage may be lighter, and build simulation/emulation exercises around this knowledge. CVC's author used the tool to identify many cases where detection logic exists around a given technique, yet no offensive tests exist yet (publicly) - this led to quick new development of tests that were published in the CVC resources!


MITRE ATT&CK® is a registered trademark of The MITRE Corporation

View the raw data
- csv: https://github.com/ControlCompass/ControlCompass.github.io/blob/main/Control_Validation_Compass.csv
- json: https://github.com/ControlCompass/ControlCompass.github.io/blob/main/cvc.json
- Site source code: https://github.com/ControlCompass/ControlCompass.github.io
