import Array "mo:core/Array";
import Time "mo:core/Time";
import Set "mo:core/Set";
import Order "mo:core/Order";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Int "mo:core/Int";

actor {
  type OrganizationType = {
    #hospital;
    #civilSociety;
    #school;
    #other : Text;
  };

  module OrganizationType {
    public func toText(orgType : OrganizationType) : Text {
      switch (orgType) {
        case (#hospital) { "hospital" };
        case (#civilSociety) { "civilSociety" };
        case (#school) { "school" };
        case (#other(txt)) { "other: " # txt };
      };
    };

    public func compare(a : OrganizationType, b : OrganizationType) : Order.Order {
      Text.compare(toText(a), toText(b));
    };
  };

  type ServiceType = {
    #wasteCollection;
    #cleaning;
    #products;
    #consulting;
    #other : Text;
  };

  module ServiceType {
    public func toText(serviceType : ServiceType) : Text {
      switch (serviceType) {
        case (#wasteCollection) { "wasteCollection" };
        case (#cleaning) { "cleaning" };
        case (#products) { "products" };
        case (#consulting) { "consulting" };
        case (#other(txt)) { "other: " # txt };
      };
    };

    public func compare(a : ServiceType, b : ServiceType) : Order.Order {
      Text.compare(toText(a), toText(b));
    };
  };

  type QuoteRequest = {
    name : Text;
    organizationName : Text;
    organizationType : OrganizationType;
    serviceType : ServiceType;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module QuoteRequest {
    public func compare(a : QuoteRequest, b : QuoteRequest) : Order.Order {
      Int.compare(b.timestamp, a.timestamp);
    };
  };

  let quoteRequests = Set.empty<QuoteRequest>();

  public shared ({ caller }) func submitQuoteRequest(
    name : Text,
    organizationName : Text,
    organizationType : OrganizationType,
    serviceType : ServiceType,
    email : Text,
    message : Text,
  ) : async () {
    if (name.size() == 0) { Runtime.trap("Name cannot be empty") };
    if (email.size() == 0) { Runtime.trap("Email cannot be empty") };
    if (message.size() == 0) { Runtime.trap("Message cannot be empty") };
    let request : QuoteRequest = {
      name;
      organizationName;
      organizationType;
      serviceType;
      email;
      message;
      timestamp = Time.now();
    };
    quoteRequests.add(request);
  };

  public query ({ caller }) func getAllQuoteRequests() : async [QuoteRequest] {
    quoteRequests.toArray().sort();
  };
};
